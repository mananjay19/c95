import React from 'react';
import { Text, View, TouchableOpacity,Image, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Speech from 'expo-speech'

export default class ScannerScreen extends React.Component {
    constructor(){
      super();
      this.state = {
        hasCameraPermissions: null,
        scanned: false,
        scannedData: '',
        buttonState: 'normal'
      }
    }
    read=async() => {
      var data = this.state.scannedData
      this.state.data === ''
      ? alert('Please scan your QR')
      : Speech.speak(data);
    }

    getCameraPermissions = async () =>{
      const {status} = await Permissions.askAsync(Permissions.CAMERA);
      
      this.setState({
      
        hasCameraPermissions: status === "granted",
        buttonState: 'clicked',
        scanned: false
      });
    }

    handleBarCodeScanned = async({type, data})=>{
      this.setState({
        scanned: true,
        scannedData: data,
        buttonState: 'normal'
      });
    }

    render() {
      const hasCameraPermissions = this.state.hasCameraPermissions;
      const scanned = this.state.scanned;
      const buttonState = this.state.buttonState;

      if (buttonState === "clicked" && hasCameraPermissions){
        return(
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        );
      }

      else if (buttonState === "normal"){
        return(
          <View style={styles.container}>
             <View style={{flex:1, backgroundColor:'black'}}>
              <Image
                source={require("../assets/scanning.jpeg")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>QRCode Scanner</Text>
            </View>
          <Text style={styles.displayText}>{
            hasCameraPermissions===true ? this.state.scannedData: "Request Camera Permission"
          }</Text>     

          <TouchableOpacity
            onPress={this.getCameraPermissions}
            style= {styles.scanButton} 
            title = "QRCode Scanner">
            <Text style={styles.buttonText}>Scan QR Code</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style= {styles.scanButton}
          onPress={this.read()}
          >
            <Text>Read the data</Text>
          </TouchableOpacity>
        </View>
        );
      }
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 20,
    }
  });