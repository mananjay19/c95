import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image,ExpoFont
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';
import {Video} from 'expo-av'

export default class TextToSpeechScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.word;
    this.state.word === ''
      ? alert('Please Enter your word')
      : Speech.speak(thingToSay);
  };

  render() {
    return (
        <SafeAreaProvider>
      <View style={styles.textContainer1}>
        <Header
          backgroundColor={'teal'}
          centerComponent={{
            text: 'Text To Speech Converter',
            style: { color: 'white', fontSize: 15, fontWeight: 700 },
          }}
        />
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

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://img.utdstc.com/icons/voice-to-text-text-to-speech-android.png:225',
          }}
        />

        <Text style={styles.text2}> Enter The Word </Text>
        <TextInput
          style={styles.inputBox}
          placeholder="type here"
          onChangeText={(t) => {
            
            this.setState({ word: t });
          }}
          value={this.state.word}
        />

        <View>
          <TouchableOpacity style={styles.button} onPress={this.speak}>
            <Text style={styles.text2}> Click Here To Hear Speech </Text>
          </TouchableOpacity>
        </View>
      </View>
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    backgroundColor: 'teal',
    color:'white'
  },
  textContainer1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'black'
  },

  text2: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'bold',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  button: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor:'teal',
    marginTop: 80,
    borderRadius: 50,
    width: '80%',
    alignSelf: 'center',
    height: 80,
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 170,
  },
});
