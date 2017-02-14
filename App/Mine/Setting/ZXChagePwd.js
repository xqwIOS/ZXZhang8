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
class ChangePwd extends Component {
    constructor(props){
        super(props);
        this.state = {
        oldPwd:'',
        newPwd:'',
        newPwdAgain:''
        };
    }
    render() {
        var oldTitle = this.props.viewTitle === '设置登录密码' ? '原登录密码':'原提款密码';
        var newTitle = this.props.viewTitle === '设置登录密码' ? '新登录密码':'新提款密码';
        var newTitleAgain = this.props.viewTitle === '设置登录密码' ? '确认登录密码':'确认提款密码';
        return (
            <ScrollView style={styles.container}
                scrollEnabled = {false}>
                <HeadView titleView = {this.props.viewTitle}
                            leftIcon = {''}
                            leftIconAction = {()=>{
                                this.props.navigator.pop()
                            }}/>
                            
                <View style = {[styles.scoreStyle]} >
                    <View style = {styles.frontViewStyle}>
                        <Text style = {{fontSize:10}}>{oldTitle}</Text>
                    </View>
                    <TextInput
                        style={styles.textInputStyle}
                        keyboardType = 'default'
                        secureTextEntry = {true}
                        placeholder = '请输入旧密码'
                        onChangeText = {(oldPwd)=>{this.setState({oldPwd})}}
                        underlineColorAndroid = {'transparent'}/>
                    <View>
                    </View>
                </View>
                <View style = {[styles.scoreStyle]} >
                    <View style = {styles.frontViewStyle}>
                        <Text style = {{fontSize:10}}>{newTitle}</Text>
                    </View>
                    <TextInput
                        style={styles.textInputStyle}
                        keyboardType = 'default'
                        secureTextEntry = {true}
                        placeholder = '请设置新密码'
                        onChangeText = {(newPwd)=>{this.setState({newPwd})}}
                        underlineColorAndroid = {'transparent'}/>
                    <View>
                    </View>
                </View>
                <View style = {[styles.scoreStyle]} >
                    <View style = {styles.frontViewStyle}>
                        <Text style = {{fontSize:10}}>{newTitleAgain}</Text>
                    </View>
                    <TextInput
                        style={styles.textInputStyle}
                        keyboardType = 'default'
                        secureTextEntry = {true}
                        placeholder = '请再次输入新密码'
                        onChangeText = {(newPwdAgain)=>{this.setState({newPwdAgain})}}
                        underlineColorAndroid = {'transparent'}/>
                    <View>
                    </View>
                </View>
                <View style = {{marginTop:10,marginLeft:15}}>
                    <Text style = {{fontSize:10}}>提款密码由6-16位字母和数字组成</Text>
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
    justifyContent:'center',
    alignItems:'center',
    height:40,
    borderBottomWidth:0.5,
    backgroundColor:'white'
  },
  textInputStyle:{
    height: 40, 
    width:Screen.window.width*0.7,
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
  frontViewStyle:{
      alignItems:'center',
      justifyContent:'center',
      width:Screen.window.width*0.2,
    },
});

module.exports = ChangePwd;