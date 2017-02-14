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
  ScrollView,
  TextInput,
  TouchableOpacity,
	Image
} from 'react-native';
var HeadView = require('../../Tools/ZXHeadView');
import Screen from '../../Tools/ZXCommon';
var StockDetail = require('./ZXStockDetail');
var TradeHistory = require('./ZXTradeHistory');
class ShareTrade extends Component {

	constructor(props){
        super(props);
        this.state={
            inputValue:''
        }
    }
	render() {
        return (
            <View style={styles.container}>
                <HeadView
	                titleView = {'股票交易'}
                    leftIcon = {''}
                    leftIconAction = {()=>{
                        this.props.navigator.pop()}}
                    rightButton = {this.renderRightBtn()}
                    collectIconAction = {this.rightBtnClicked.bind(this)}/>
                <ScrollView
                    scrollEnabled = {false}>
                    <View style = {{justifyContent:'center',height:30,alignItems:'center',width:Screen.window.width}}>
                        <Text style = {{fontSize:10}}>请输入申请金额</Text>
                    </View>
                    <View style = {styles.inputViewStyle}>
                        <Text style={{marginLeft:15,marginRight:15,fontSize:10}}>元</Text>
		                <TextInput
		                    style={styles.textInputStyle}
		                    keyboardType = 'number-pad'
		                    placeholder = '请输入千的整数倍'
		                    placeholderTextColor = 'rgb(124,124,124)'
		                    onChangeText = {(inputValue)=>{this.setState({inputValue})}}
		                    underlineColorAndroid = {'transparent'}/>
                    </View>
                    <View style={styles.bottomViewStyle}>
                        <Text style = {{fontSize:11}}>
                            收益放大
                            <Text style = {{color:'red'}}>8</Text>
                            倍
                        </Text>
                        <Text style = {{color:'red',fontSize:11}}>
                            2000
                            <Text style = {{color:'black'}}>元起配 最高
                                <Text style = {{color:'red'}} > 500000
                                    <Text style = {{color:'black'}}>元</Text>
                                </Text>
                            </Text>
                        </Text>
                    </View>
					 <TouchableOpacity
						 activeOpacity={1.0}
						 onPress = {this._btnClicked.bind(this,this.state.inputValue)}>
						 <View style = {styles.btnStyle}>
							 <Text style = {{color:'white'}}>下一步</Text>
						 </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
	}
    renderRightBtn(){
		return(
			<Image source = {{uri : 'icon_trade_history'}} style={{marginTop:14,height:15,width:15,}} />
		);
    }
	rightBtnClicked(){
		this.props.navigator.push({
			name:'历史合约',
			component:TradeHistory,
			passProps:{
				viewTitle:'历史合约'
			}
		});
	}
    _btnClicked(pzMoney){
        this.props.navigator.push({
                title:'股票交易',
                component:StockDetail,
                passProps:{
                    viewTitle:'股票交易',
                }
		});
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  inputViewStyle:{
    flexDirection:'row-reverse',
    alignItems:'center',
    height:50,
    width:Screen.window.width*0.9,
    marginRight:Screen.window.width*0.05,
    backgroundColor:'white'
  },
  textInputStyle:{
    height: 40, 
    width:Screen.window.width*0.7,
    marginLeft:10,
    paddingTop:10,
    paddingLeft:10,
  },
  bottomViewStyle:{
    height:80,
    backgroundColor:'rgb(214,214,229)',
    width:Screen.window.width*0.9,
    marginLeft:Screen.window.width*0.05,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center'
  },
  btnStyle:{
    justifyContent:'center',
    width:Screen.window.width/3,
    height:30,
    borderRadius:20,
    backgroundColor:Screen.window.btnColor,
    marginTop:50,
    marginLeft:Screen.window.width/3,
    alignItems:'center'
  },
});

module.exports = ShareTrade;