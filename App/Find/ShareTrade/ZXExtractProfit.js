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
class ExtractProfit extends Component {
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
                <HeadView   titleView = {this.props.viewTitle}
                            leftIcon = {''}
                            leftIconAction = {()=>{
                                this.props.navigator.pop()}}/>
                <View style={[styles.scoreStyle,{justifyContent:'space-between'}]}>
                    <Text style = {[{fontSize:10},{marginLeft:5}]}>当前盈亏:</Text>
                    <Text style = {[{fontSize:10},{marginRight:5}]}>{this.props.count}</Text>
                </View>

                <View style = {[styles.scoreStyle]} >
                    <View style = {{justifyContent:'center',marginLeft:5}}>
                        <Text style = {{fontSize:10}}>提取利润</Text>
                    </View>
                    <TextInput
                        style={styles.textInputStyle}
                        keyboardType = 'number-pad'
                        placeholder = '请输入提取金额'
                        onChangeText = {(text)=>{this.setState({text})}}
                        underlineColorAndroid = {'transparent'}/>
                </View>
                <Text style = {{marginLeft:5,fontSize:8,marginTop:5}}>{'最高可提取'+this.props.count+'元'}</Text>
                <TouchableOpacity
                    activeOpacity={1.0}
                    onPress = {this._btnClicked.bind(this,this.state.text*100)}>
                    <View style = {styles.btnStyle}>
                        <Text style = {{color:'white'}}>确认</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        );
    }
    _btnClicked(){
  
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  scoreStyle:{
    flexDirection:'row',
    alignItems:'center',
    height:40,
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

module.exports = ExtractProfit;