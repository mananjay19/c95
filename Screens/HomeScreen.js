import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'
import MyHeader from '../MyHeader'
import db from "../config";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import CalenderScreen from './CalenderScreen';
import CommentScreen from './CommentScreen';
import ScannerScreen from './ScannerScreen';
import TextToSpeechScreen from './TextToSpeechScreen';
import TipScreen from './TipScreen';
import {Video} from 'expo-av'

export default class HomeScreen extends Component{
    render(){
        return(
            <SafeAreaProvider>
            <View>
                <MyHeader title='Home Screen' navigation={this.props.navigation}/>
                
                <View style={{flex:1, backgroundColor:'black'}}>
                <Video
                  source={(require('../assets/hd0418.mov'))}
                  rate={1.0}
                  volume={1.0}
                  muted={false}
                  resizeMode="cover"
                  style={{ width: 500, height: 300, justifyContent:'center' }}
                  shouldPlay
                  isLooping
                  />
                    <TouchableOpacity style={styles.buttonStyling}
                    onPress={()=>{
                        this.props.navigation.navigate('CalenderScreen')
                    }}
                    >
                        <Text style={styles.textStyling}>Calender Screen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyling}
                        onPress={()=>{
                            this.props.navigation.navigate('CommentScreen')
                        }}
                        >
                        <Text style={styles.textStyling}>Comment Screen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyling}
                        onPress={()=>{
                            this.props.navigation.navigate('ScannerScreen')
                        }}
                        >
                        <Text style={styles.textStyling}>Scanner Screen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyling}
                        onPress={()=>{
                            this.props.navigation.navigate('TextToSpeechScreen')
                        }}
                        >
                        <Text style={styles.textStyling}>Text To speech Screen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyling}
                        onPress={()=>{
                            this.props.navigation.navigate('TipScreen')
                        }}
                        >
                        <Text style={styles.textStyling}>Tip Screen</Text>
                    </TouchableOpacity>
                    
                </View>
                <TouchableOpacity style={styles.buttonStyling}
                        onPress={()=>{
                            this.props.navigation.navigate('BookSanta')
                        }}
                        >
                        <Text style={styles.textStyling}>Log Out</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyling}
                        onPress={()=>{
                            this.props.navigation.navigate('TipScreen')
                        }}
                        >
                        <Text style={styles.textStyling}> </Text>
                    </TouchableOpacity>
            </View>
            </SafeAreaProvider>
        )
    }
}
const styles = StyleSheet.create({
    buttonStyling:{
        backgroundColor:'teal',
        width:"80%",
        height:50,
        justifyContent:'center',
        alignSelf:'center',
        margin:5,
        borderRadius:30,
        borderWidth:2,
        borderColor:'white',
    },
    textStyling:{
        fontSize:RFValue(5),
        fontWeight:'bold',
        alignSelf:'center',
    }
})