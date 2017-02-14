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
class ScoreExc extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:''
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
                    <Text style = {[{fontSize:10},{marginLeft:5}]}>当前积分</Text>
                    <Text style = {[{fontSize:10},{marginRight:5}]}>{this.props.count}</Text>
                </View>
        
                <View style = {[styles.scoreStyle]} >
                    <View style = {{justifyContent:'center',marginLeft:5}}>
                        <Text style = {{fontSize:10}}>兑换数量</Text>
                    </View>
                    <TextInput
                        style={styles.textInputStyle}
                        keyboardType = 'number-pad'
                        placeholder = '请输入兑换数量'
                        onChangeText = {(text)=>{this.setState({text})}}
                        underlineColorAndroid = {'transparent'}/>
                </View>
                <Text style = {{marginLeft:5,fontSize:8,marginTop:5}}>{'100积分／金币，总计'+this.state.text*100+'积分'}</Text>
                <TouchableOpacity
                    activeOpacity={1.0}
                    onPress = {this._btnClicked.bind(this,this.state.text*100)}>
                    <View style = {styles.btnStyle}>
                        <Text style = {{color:'white'}}>确认兑换</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        );
    }
    _btnClicked(score){
        if(this.props.count > score){
            alert('购买成功')
        }else{
            alert('积分不足')
        }
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
    borderBottomWidth:0.5
  },
  textInputStyle:{
    height: 40, 
    width:Screen.window.width*0.8,
    fontSize:10,
    marginLeft:10
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

module.exports = ScoreExc;