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
import {Video} from 'expo-av'

export default class TipScreen extends Component{ 
    render(){
        return(
            <SafeAreaProvider>
            <View style={{flex:1, backgroundColor:'black', color:'white'}}>
                <MyHeader title='Tip Screen'/>
                <View style={{marginTop:10}}>
                  <Image
                  source={(require('../assets/tips.png'))}
                  style={{width: 500, height: 400, justifyContent:'center', alignSelf:'center' }}
                  />
                </View>
                <View>
                    <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>We have some tips here</Text>
                </View>
                <View>
                  <Text style={{color:'white', fontSize:18,}}>1. At the top left side there is an icon which will lead to stright to the home screen</Text>
                  <Text style={{color:'white', fontSize:18,}}>2. At home screen there will be different buttons which will lead you to different screen </Text>
                  <Text style={{color:'white', fontSize:18,}}>3. The calender button in the home screen will show you the date</Text>
                  <Text style={{color:'white', fontSize:18,}}>4. There is a button on the top right which will lead you to the comment page. You can also use the button in the home screen</Text>
                  <Text style={{color:'white', fontSize:18,}}>5. The scanner button is where you can scan the given QR code for the bible</Text>
                  <Text style={{color:'white', fontSize:18,}}>6. The text to speech screen is where the bible verses will be said</Text>
            </View>
            </View>
            </SafeAreaProvider>
        )
    }
}