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
var BindBank = require('./ZXBindBank');
import Screen from '../../Tools/ZXCommon';
class RealName extends Component {
    constructor(props){
        super(props);
        this.state = {
            pwsdStr:'',
            pwsdAgainStr:''
        };
    }
    render() {
        return (
            <ScrollView
                style={styles.container}
                scrollEnabled = {false}>
                <HeadView
	                titleView = {this.props.viewTitle}
                    leftIcon = {''}
                    leftIconAction = {()=>{
                        this.props.navigator.pop()}}/>
                <View style = {[styles.scoreStyle,{marginTop:10}]} >
                    <View style = {{justifyContent:'center',marginLeft:5}}>
                        <Text style = {{fontSize:10}}>真实姓名</Text>
                    </View>
	                <TextInput
	                    style={styles.textInputStyle}
	                    placeholder = '请输入您的姓名'
	                    secureTextEntry= {true}
	                    onChangeText = {(pwsdStr)=>{this.setState({pwsdStr})}}
	                    underlineColorAndroid = {'transparent'}/>
                </View>
                <View style = {[styles.scoreStyle]} >
                    <View style = {{justifyContent:'center',marginLeft:5}}>
                        <Text style = {{fontSize:10}}>身份证号</Text>
                    </View>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder = '18位身份证号'
                        secureTextEntry= {true}
                        onChangeText = {(pwsdAgainStr)=>{this.setState({pwsdAgainStr})}}
                        underlineColorAndroid = {'transparent'}/>
                </View>
                <Text style = {{marginLeft:5,fontSize:8,marginTop:5}}>请填写与银行开户人一致的身份信息</Text>
                <TouchableOpacity
                    activeOpacity={1.0}
                    onPress = {this._btnClicked.bind(this,this.state.pwsdStr,this.state.pwsdAgainStr)}>
                    <View style = {styles.btnStyle}>
                        <Text style = {{color:'white'}}>下一步</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        );
    }
    _btnClicked(pwsd,pwsdAgain){
        this.props.navigator.push({
			title:'绑定银行卡',
            component:BindBank,
            passProps:{
                viewTitle:'绑定银行卡',
            }
        });
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Screen.window.backColor,
  },
  scoreStyle:{
    flexDirection:'row',
    alignItems:'center',
    height:40,
    borderTopWidth:0.5,
    backgroundColor:'white'
  },
  textInputStyle:{
    height: 40, 
    width:Screen.window.width*0.8,
    fontSize:10,
    marginLeft:10,
    backgroundColor:'white'
  },
  btnStyle:{
    justifyContent:'center',
    width:Screen.window.width/3,
    height:30,
    borderRadius:20,
    backgroundColor:'black',
    marginTop:25,
    marginLeft:Screen.window.width/3,
    alignItems:'center'
  },
});

module.exports = RealName;