import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Input,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import db from "../config";
import firebase from "firebase";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import {Video} from 'expo-av'

export default class SignInScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
    };
  }

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate("HomeScreen");
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.4}}>
                 <Video
                  source={(require('../assets/hd1612.mov'))}
                  rate={1.0}
                  volume={1.0}
                  muted={false}
                  resizeMode="cover"
                  style={{ width: 500, height: 300, justifyContent:'center' }}
                  shouldPlay
                  isLooping
                  />
                  </View>
        <View style={{ flex: 0.45 }}>
          <View style={styles.TextInput}>
            <TextInput
              style={styles.loginBox}
              placeholder="abc@example.com"
              placeholderTextColor="gray"
              keyboardType="email-address"
              onChangeText={text => {
                this.setState({
                  emailId: text
                });
              }}
            />
            <TextInput
              style={[styles.loginBox]}
              secureTextEntry={true}
              placeholder="Enter Password"
              placeholderTextColor="gray"
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
            />
          </View>
          <View style={{ flex: 0.5, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.userLogin(this.state.emailId, this.state.password);
              }}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={()=>this.props.navigation.navigate("SignUpScreen")}
            >
              <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  loginBox: {
    width: "80%",
    height: RFValue(25),
    borderWidth: RFValue(1.5),
    borderColor: "#ffffff",
    fontSize: RFValue(20),
    paddingLeft: RFValue(10),
    margin:5,
  },
  button: {
    width: "80%",
    height: RFValue(25),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: RFValue(2),
    borderRadius: RFValue(25),
    backgroundColor: "#ffff",
    shadowColor: "#000",
    marginBottom: RFValue(10),
    shadowOffset: {
      width: RFValue(0),
      height: RFValue(8)
    },
    shadowOpacity: RFValue(0.3),
    shadowRadius: RFValue(10.32),
    elevation: RFValue(16),
    borderColor:'teal'
  },
  buttonText: {
    color: "#32867d",
    fontWeight: "bold",
    fontSize: RFValue(20)
  },
  signupView: {
    flex: 0.05,
    justifyContent: "center",
    alignItems: "center"
  },
  signupText: {
    fontSize: RFValue(10),
    fontWeight: "bold",
    color: "#32867d"
  },
  TextInput: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bookImage: {
    width: "100%",
    height: RFValue(110),
    alignItems: "center",
    justifyContent: "center",
  }
});
