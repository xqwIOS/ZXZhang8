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
  ScrollView,
  TouchableHighlight
} from 'react-native';
var HeadView = require('../../Tools/ZXHeadView');

import ModalDropdown from 'react-native-modal-dropdown';
import Screen from '../../Tools/ZXCommon';

const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];

class BindBank extends Component {
    constructor(props){
        super(props);
        this.state = {
            cardId:''
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
                <View style = {{marginTop:10}}>
                    {this._renderCell('开户人','徐庆文',null)}

                    {this._renderCell('选择银行','',DEMO_OPTIONS_1)}
                    {this._renderCell('开户行所在省','',DEMO_OPTIONS_1)}
                    {this._renderCell('开户行所在市','',DEMO_OPTIONS_1)}
                </View>
                

                <View style = {[styles.scoreStyle]} >
                    <View style = {{marginLeft:5,width:Screen.window.width*0.2}}>
                        <Text style = {{fontSize:10}}>银行卡号</Text>
                    </View>
                    <TextInput
                        style={styles.textInputStyle}
                        keyboardType = 'number-pad'
                        placeholder = '请输入银行卡号'
                        onChangeText = {(cardId)=>{this.setState({cardId})}}
                        underlineColorAndroid = {'transparent'}
                    />
                </View>
                <Text style = {{marginLeft:5,fontSize:8,marginTop:5}}>为了您的资金安全，请选择常用的银行卡，确保为本人使用，仅限绑定一张银行卡</Text>
                <TouchableOpacity
                    activeOpacity={1.0}
                    onPress = {this._btnClicked.bind(this,this.state.text)}>
                    <View style = {styles.btnStyle}>
                        <Text style = {{color:'white'}}>确认绑定</Text>
                    </View>      
                </TouchableOpacity>
                
            </ScrollView>
        );
    }
    _renderCell(frontTitle,backTitle,titleList){
        if(titleList === null){
            return(
                <View style = {styles.cellStyle}>
                    <View style = {{marginLeft:5,justifyContent:'center'}}>
                        <Text style={{fontSize:10}}>{frontTitle}</Text>
                    </View>
                    <View style = {{marginRight:25,justifyContent:'center'}}>
                        <Text style={{fontSize:10}}>{backTitle}</Text>
                    </View>
                </View>
            );
        }else{
            return(
                <View style = {styles.cellStyle}>
                    <View style = {{marginLeft:5,justifyContent:'center'}}>
                        <Text style={{fontSize:10}}>{frontTitle}</Text>
                    </View>
                    <View style = {{marginRight:25,justifyContent:'center'}}>
                        <ModalDropdown style={styles.dropdown_2}
                           textStyle={styles.dropdown_2_text}
                           dropdownStyle={styles.dropdown_2_dropdown}
                           options={titleList}
                           defaultValue={'请选择'}
                           />
                    </View>
                </View>
            );
        }
    }

    _btnClicked(){
        alert('绑定成功')
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Screen.window.backColor,
  },
  cellStyle:{
      flexDirection:'row',
      justifyContent:'space-between',
      height:40,
      backgroundColor:'white',
      borderBottomWidth:0.5,
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
    width:Screen.window.width*0.6,
    fontSize:10,
    marginLeft:Screen.window.width*0.1,
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
  dropdown_2: {
    justifyContent:'center',
    width: 150,
    borderRadius: 3,
    height:35,
    marginTop:1,
    marginBottom:1
  },
  dropdown_2_text: {
    height: 35,
    lineHeight: 40,
    fontSize: 12,
    color: 'black',
    textAlign: 'right',
  },
  dropdown_2_dropdown: {
    width: 150,
    borderColor: 'cornflowerblue',
    borderWidth: 2,
    borderRadius: 3,
  },
});

module.exports = BindBank;