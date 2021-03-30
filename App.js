import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './Screens/SignInScreen'
import SignUpScreen from './Screens/SignUpScreen'
import HomeScreen from './Screens/HomeScreen';
import CommentScreen from './Screens/CommentScreen';
import CalenderScreen from './Screens/CalenderScreen';
import ScannerScreen from './Screens/ScannerScreen';
import TextToSpeechScreen from './Screens/TextToSpeechScreen';
import TipScreen from './Screens/TipScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
       <AppContainer/>
    </View>
  );
}
}
const AppNavigator = createSwitchNavigator({
  SignInScreen:SignInScreen,
  SignUpScreen:SignUpScreen,
  HomeScreen:HomeScreen,
  CommentScreen:CommentScreen,
  CalenderScreen:CalenderScreen,
  ScannerScreen:ScannerScreen,
  TextToSpeechScreen:TextToSpeechScreen,
  TipScreen:TipScreen,
})
const AppContainer=createAppContainer(AppNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
