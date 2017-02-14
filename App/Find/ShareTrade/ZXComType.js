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
  Image
} from 'react-native';

import Screen from '../../Tools/ZXCommon';
var FindTrade = require('./ZXFindTrade');


var headList1 = ['名称/代码','市值/盈亏','持仓/可用','现价/成本'];
var headList2 = ['名称/代码','价格/数量','状态/类型','委托时间'];



var middleViewWidth = Screen.window.width;

var inputViewWidth  = middleViewWidth*0.55;
var inputViewHeight = 33;
var btnSpace = 3;
var btnWidth = (inputViewWidth-4*btnSpace)/2;
var btnHeight = 30;
var middleRightViewW = middleViewWidth*0.4;
// http://web.juhe.cn:8080/finance/stock/hs?gid=sh601009&key=b632cc1d0a25c7b93ced4b8278189177
//var AppKey = 'b632cc1d0a25c7b93ced4b8278189177';
class Comninsion extends Component {
  constructor(props){
      super(props);
      this.state={
        sharesCode :'',
        sharesName:'',
        sharesPrice:'',
        sharesLimitU:'0.00',
        sharesLimitD:'0.00',
        sharesCount:'0'
      };
  }
  render() {
    return (
      <View style={styles.container}>
         {this.renderView(this.props.tabLabel)}
      </View>
    );
  }

  renderView(tabType){
    if(tabType === '持仓'){
      return Comninsion.renderOperateView(tabType);
    }else if(tabType === '买入'){
      return this.renderTradeView(tabType);
    }else if(tabType === '卖出'){
      return this.renderTradeView(tabType);
    }else if(tabType === '撤单'){
      return Comninsion.renderOperateView(tabType);
    }else if(tabType === '查询'){
      return this.renderQueryView(tabType);
    }
  }
  static renderOperateView(type){
	  var itemList;
	  itemList = type === '持仓' ? headList1 : headList2;
	  return(
      <View>
        {Comninsion.renderHeadTableView(itemList)}
      </View>
    );
  }
	renderTradeView(type){
    var btnColor = type === '买入'?'red':'green';
    var allView = [];

    allView.push(
      <View key = {'middleView'} style = {styles.middleView}>
        <View style = {styles.middleLeftView}>
          {/*股票代码输入框*/}
          <View style = {styles.inputViewStyle}>
            <TextInput
                style={[styles.textInputStyle,{width:Screen.window.width*0.5}]}
                keyboardType = 'number-pad'
                placeholder = '股票代码'
                maxLength = {6}
                onChangeText = {(sharesCode)=>{this.setState({sharesCode})}}
                underlineColorAndroid = {'transparent'}
            />
            <Text style = {{marginLeft:-20,fontSize:10}}>{this.state.sharesName}</Text>
          </View>
          {/*股票买卖价格输入框*/}

          <View style = {styles.inputViewStyle}>
            <View style = {[styles.changePriceViewStyle,{borderRightWidth:0.5}]}>
               <Image source = {{uri:'calculate_sub'}} style = {styles.iconStyle} />
            </View>
            <TextInput
                style={[styles.textInputStyle,{width:Screen.window.width*0.5-inputViewHeight,textAlign:'center'}]}
                keyboardType = 'number-pad'
                placeholder = '0.00'
                onChangeText = {(sharesPrice)=>{this.setState({sharesPrice})}}
                underlineColorAndroid = {'transparent'}
            />
            <View style = {[styles.changePriceViewStyle,{marginLeft:-15,borderLeftWidth:0.5}]}>
              <Image source = {{uri:'calculate_add'}} style = {styles.iconStyle} />
            </View>
          </View>
          {/*股票涨停板*/}
          <View style = {{width:inputViewWidth,height:inputViewHeight,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style = {{fontSize:10}}>
              跌停
              <Text style = {{color:'green'}}>{this.state.sharesLimitD}</Text>
            </Text>
            <Text style = {{fontSize:10}}>
              涨停
              <Text style = {{color:'red'}}>{this.state.sharesLimitU}</Text>
            </Text>
          </View>
          {/*股票买卖数量输入框*/}
          <View style = {[styles.inputViewStyle,{justifyContent:'space-between'}]}>
            <TextInput
                style={[styles.textInputStyle,{width:inputViewWidth*0.5}]}
                keyboardType = 'number-pad'
                placeholder =  {type === '买入' ?'委买股数':'委卖股数'}
                onChangeText = {(sharesCount)=>{this.setState({sharesCount})}}
                underlineColorAndroid = {'transparent'}
            />
            <View style = {{marginRight:5,height:inputViewHeight,alignItems:'center',justifyContent:'center'}}>
              <Text style = {{fontSize:10}}>{type === '买入' ?'可买':'可卖'}{this.state.sharesCount+'股'}</Text>
            </View>
          </View>

          <View style = {{marginTop:10,flexDirection:'row',width:inputViewWidth,height:40,justifyContent:'space-between'}}>
            <View style = {{backgroundColor:btnColor,height:btnHeight,width:btnWidth,justifyContent:'center',alignItems:'center'}}>
              <Text style = {{color:'white'}}>{type}</Text>
            </View>
            <View style = {{borderWidth:0.5,borderColor:btnColor,height:btnHeight,width:btnWidth,justifyContent:'center',alignItems:'center'}}>
              <Text style = {{color:btnColor}}>{'市价'+type}</Text>
            </View>
          </View>
        </View>
        <View style = {styles.middleRightView}>
          <View style = {{marginTop:10}}>
            {Comninsion.renderSellFiveCell('卖5','','')}
            {Comninsion.renderSellFiveCell('卖4','','')}
            {Comninsion.renderSellFiveCell('卖3','','')}
            {Comninsion.renderSellFiveCell('卖2','','')}
            {Comninsion.renderSellFiveCell('卖1','','')}
          </View>
          <View style ={{height:0.5,backgroundColor:'gray',width:middleRightViewW,marginTop:18}}>

          </View>
          <View style = {{marginTop:24}}>
            {Comninsion.renderSellFiveCell('买1','','')}
            {Comninsion.renderSellFiveCell('买2','','')}
            {Comninsion.renderSellFiveCell('买3','','')}
            {Comninsion.renderSellFiveCell('买4','','')}
            {Comninsion.renderSellFiveCell('卖5','','')}
          </View>
        </View>
      </View>
    );
    allView.push(
      <View key= {'headTableView'} style = {{marginTop:5}}>
        {Comninsion.renderHeadTableView(headList1)}
      </View>
    );
    return allView;
  }
	renderQueryView(){
    return(
      <View style = {{marginTop:10}}>
        <View>
          {this.renderFindViewCell('当日成交')}
          {this.renderFindViewCell('当日委托')}
        </View>
        <View style = {{marginTop:10}}>
          {this.renderFindViewCell('历史成交')}
          {this.renderFindViewCell('历史委托')}
        </View>
      </View>
    );
  }
	renderFindViewCell(title){
    return(
      <TouchableOpacity activeOpacity = {1.0} 
        onPress = {this.cellClicked.bind(this,title)}
      >
        <View style = {{flexDirection:'row',height:30,alignItems:'center',justifyContent:'space-between',borderBottomWidth:0.5}}>
          <Text style={{marginLeft:5,fontSize:10}}>{title}</Text>
          <Text style={{marginRight:5}}>></Text>
        </View>
      </TouchableOpacity>
      
    );
  }
    cellClicked(title){
     this.props.navigator.push({
                title:title,
                component:FindTrade,
                passProps:{
                    viewTitle:title
                }
            });
  }
	static renderSellFiveCell(title, price, count){
    return(
      <View style = {{height:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <Text style = {{fontSize:9}}>{title}</Text>
        <Text style = {{color:'red',fontSize:9}}>{price === ''?'0.00': price}</Text>
        <Text style = {{fontSize:9}}>{count === '' ? '--': count}</Text>
      </View>
    );
  }
	static renderHeadTableView(titleList){
    var titleArr = [];
    for(var i=0;i<titleList.length;i++){
      titleArr.push(
        <View key = {i}>
          <Text style = {{fontSize:10}}>{titleList[i]}</Text>
        </View>
      );
    }
    return(
      <View style = {{borderBottomWidth:0.5,flexDirection:'row',justifyContent:'space-around',alignItems:'center',height:25}}>
        {titleArr}
      </View>
    );
  }
  
}

//noinspection JSSuspiciousNameCombination,JSSuspiciousNameCombination,JSSuspiciousNameCombination,JSSuspiciousNameCombination,JSSuspiciousNameCombination
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  middleView:{
    flexDirection:'row'
  },
  middleLeftView:{
    marginLeft:10,
    width:middleViewWidth*0.55
  },
  middleRightView:{
    marginLeft:5,
    width:middleRightViewW
  },
  inputViewStyle:{
    height:inputViewHeight,
    width:inputViewWidth,
    borderBottomWidth:0.5,
    borderTopWidth:0.5,
    borderLeftWidth:0.5,
    borderRightWidth:0.5,
    marginTop:10,
    borderColor:'gray',
    flexDirection:'row',
    alignItems:'center'
    
  },
  textInputStyle:{
    height: inputViewHeight, 
    fontSize:10,
    paddingLeft:5,
    alignItems:'center',
    justifyContent:'center'
  },
  changePriceViewStyle:{
    width:inputViewHeight,
    height:inputViewHeight,
    alignItems:'center',
    justifyContent:'center'
  },
  iconStyle:{
    height:18,
    width:18
  }
});

module.exports = Comninsion;