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

export default class CommentScreen extends Component{
    render(){
        return(
            <SafeAreaProvider>
            <View style={{flex:1, backgroundColor:'black'}}>
                <MyHeader title='Comment'/>
                <View>
                    <Text>TYPE YOUR COMMENT</Text>
                    <TextInput
              style={styles.InputStyle}      
              placeholder="TYPE COMMENT HERE"
              placeholderTextColor="gray"
              multiline='true'
              onChangeText={text => {
                this.setState({
                  comment: text
                });
              }}
            />
                </View>
                <View style={{ flex: 0.5, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {

              }}
            >
              <Text style={{justifyContent:'center', alignSelf:'center'}}>Submit</Text>
            </TouchableOpacity>
            </View>
            </View>
            </SafeAreaProvider>
        )
    }
}
const styles = StyleSheet.create({
     InputStyle:{
       width:'80%',
       height:50,
       textAlign:'center',
       alignSelf:'center',
       margin:5,
       borderRadius:0,
       borderWidth:2,
       borderColor:'black',
     },
     button:{
      backgroundColor:'teal',
      width:150,
      height:50,
      justifyContent:'center',
      alignSelf:'center',
      margin:5,
      borderRadius:30,
      borderWidth:2,
      borderColor:'black',
  },
})