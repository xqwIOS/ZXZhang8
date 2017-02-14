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
  TouchableOpacity,
	Image
} from 'react-native';
var HeadView = require('../../Tools/ZXHeadView');
import Screen from '../../Tools/ZXCommon';
var PzInfo = require('./ZXPzInfo');
var TradeHistory = require('./ZXTradeHistory');
class StockDetail extends Component {
    constructor(props){
        super(props);
    }
	render() {
	    return (
	      <View style={styles.container}>
	       <HeadView titleView = {this.props.viewTitle}
	                 leftIcon = {''}
	                 leftIconAction = {()=>{
	                     this.props.navigator.pop()}}
	                 rightButton = {this.renderRightBtn()}
	                 collectIconAction = {this.rightBtnClicked.bind(this)}/>

	        <ScrollView>
	            <View style= {styles.accountViewStyle}>
	              <View style = {[{alignItems:'center'},{justifyContent:'center'}]}>
	                <Text style = {{color:'white',fontSize:10}}>总操盘资金（元）</Text>
	                <Text style = {{color:'yellow',marginTop:5,fontSize:16}}>2250.00</Text>
	              </View>
	            </View>
	            <View style = {{marginTop:10}}>
	              {this.renderCell('风险保证金','250元','red')}
	              {this.renderCell('管理费','4.68元/交易日','red')}
	              {this.renderCell('警戒线','2125元','')}
	              {this.renderCell('止损线','2075元','')}
	              {this.renderCell('开始交易','2017-01-03 00:00:00','')}
	            </View>
	            <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center',width:Screen.window.width,height:30}}>
	              <Text style = {{fontSize:10}}>申请即表示已阅读并同意</Text>
	              <TouchableOpacity activeOpacity = {1.0}
	                  onPress = {this.operatorProtocol.bind(this)} >
	                      <Text style = {{fontSize:10}}>《操盘协议》</Text>
	                  </TouchableOpacity>
	            </View>
	            <TouchableOpacity
	              activeOpacity={1.0}
	              onPress = {this._btnClicked.bind(this)}>
	              <View style = {styles.btnStyle}>
	                  <Text style = {{color:'white'}}>立即申请</Text>
	              </View>
	            </TouchableOpacity>
	        </ScrollView>
	      </View>
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
	_btnClicked(){
		var isFreeExp = this.props.viewTitle === '免费体验' ? true :false
		this.props.navigator.push({
				title:'股票交易',
				component:PzInfo,
				passProps:{
					viewTitle:'股票交易',
					isFreeExp:isFreeExp
				}
		});
    }
	operatorProtocol(){
		alert('1111');
	}
	renderRightBtn(){
		return(
			<Image source = {{uri : 'icon_trade_history'}} style={{marginTop:14,height:15,width:15,}} />
		);
	}
	renderCell(title,count,isRed){
		return(
			<TouchableOpacity activeOpacity = {1.0}
				onPress = {this.cellSelected.bind(this,title,count)}>
		        <View style = {styles.cellViewStyle}>
					<View style = {[{marginLeft:5}]}>
		                <Text>{title}</Text>
		            </View>
		            <View style = {[{flexDirection:'row'},{marginRight:8}]}>
		                <Text style= {[{marginRight:5},{color: isRed === 'red'? 'red':'black'}]}>{count}</Text>
		            </View>
		        </View>
            </TouchableOpacity>
        );
    }

	cellSelected(title,num){
    
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  accountViewStyle:{
    height:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(109,109,124)',
    flexDirection:'row'
  },
  arrowViewStyle:{
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    right:5
  },
  cellViewStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'white',
    height:44,
    borderBottomWidth:0.5
  },
  btnStyle:{
    justifyContent:'center',
    width:Screen.window.width/3,
    height:30,
    borderRadius:20,
    backgroundColor:'black',
    marginTop:35,
    marginLeft:Screen.window.width/3,
    alignItems:'center'
  },
});

module.exports = StockDetail;