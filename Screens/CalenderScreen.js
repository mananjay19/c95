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

export default class CalenderScreen extends Component{
    render(){
        return(
            <SafeAreaProvider>
            <View>
                <MyHeader title='Comment Screen'/>
                <View style={{flex:1, backgroundColor:'black'}}>
                    <Text>Calender</Text>
                    <Image
            source={require("../assets/calender.png")}
            style={style.calenderImage}
          />
                </View>
            </View>
            </SafeAreaProvider>
        )
    }
}
const style=StyleSheet.create({
    calenderImage: {
        width: "100%",
        height: 220,
        alignItems: "center",
        justifyContent: "center",
      }
})