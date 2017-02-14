/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
var HeadView = require('../../Tools/ZXHeadView');
import Screen from '../../Tools/ZXCommon';
class ChangeTel extends Component {
    constructor(props){
        super(props);
        this.state = {
            code:''
        };
    }
    render() {
        return (
            <ScrollView style={styles.container}
                scrollEnabled = {false}>
                <HeadView titleView = {this.props.viewTitle}
                    leftIcon = {''}
                    leftIconAction = {()=>{
                        this.props.navigator.pop()}}/>
                <View style={[styles.scoreStyle,{justifyContent:'space-between'}]}>
                    <Text style = {[{fontSize:10},{marginLeft:5}]}>原绑定手机</Text>
                    <Text style = {[{fontSize:10},{marginRight:15}]}>{this.props.tel}</Text>
                </View>
        
                <View style = {[styles.scoreStyle]} >
                    <View style = {{justifyContent:'center',marginLeft:5}}>
                        <Text style = {{fontSize:10}}>短信验证码</Text>
                    </View>
                    <TextInput
                        style={styles.textInputStyle}
                        keyboardType = 'number-pad'
                        placeholder = '验证码'
                        onChangeText = {(code)=>{this.setState({code})}}
                        underlineColorAndroid = {'transparent'}/>
                    <View style = {styles.codeStyle}>
                        <Text style = {{fontSize:10,color:'white'}}>短信验证</Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={1.0}
                    onPress = {this._btnClicked.bind(this,this.state.code)}>
                    <View style = {styles.btnStyle}>
                        <Text style = {{color:'white'}}>下一步</Text>
                    </View>      
                </TouchableOpacity>
            </ScrollView>
        );
    }
    _btnClicked(code){
  
    }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Screen.window.backColor,
  },
  scoreStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:40,
    borderBottomWidth:0.5,
    backgroundColor:'white'
  },
  textInputStyle:{
    height: 40, 
    width:Screen.window.width*0.5,
    fontSize:10,
    marginLeft:10
  },
  btnStyle:{
    justifyContent:'center',
    width:Screen.window.width/3,
    height:30,
    borderRadius:20,
    backgroundColor:Screen.window.btnColor,
    marginTop:25,
    marginLeft:Screen.window.width/3,
    alignItems:'center'
  },
  codeStyle:{
      backgroundColor:'rgb(113,113,113)',
      height:25,
      width: 60,
      marginRight:15,
      alignItems:'center',
      justifyContent:'center'
  },
});

module.exports = ChangeTel;