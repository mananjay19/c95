import React, { Component} from 'react';
import { Header,Icon, } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import CommentScreen from './Screens/CommentScreen'

export default class MyHeader extends Component{

  render(){
    return(
        <Header
          leftComponent={<Icon name='home' type='font-awesome' color='#ffffff'  onPress={() => this.props.navigation('HomeScreen')}/>}
          centerComponent={{ text: this.props.title, style: { color: '#ffffff', fontSize:20,fontWeight:"bold", } }}
          rightComponent={<Icon name='rowing' color='#fff' onPress={() => this.props.navigation('CommentScreen')}/>}
          backgroundColor = "#32867d"
        />

    )
}
}