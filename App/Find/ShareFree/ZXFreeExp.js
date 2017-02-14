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
  TouchableOpacity
} from 'react-native';
var HeadView = require('../../Tools/ZXHeadView');
import Screen from '../../Tools/ZXCommon';
var StockDetail = require('../ShareTrade/ZXStockDetail');
class FreeExp extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <HeadView   titleView = {this.props.viewTitle}
                            leftIcon = {''}
                            leftIconAction = {()=>{
                                this.props.navigator.pop()}}/>
                <View style = {{alignItems:'center',justifyContent:'center',height:100}}>
                    <Text style = {{fontSize:11}}>首次配资用户专享</Text>
                    <Text style = {{marginTop:3}}>送你<Text style = {{color:'red'}}>2000</Text>元实盘资金</Text>
                    <Text style = {{marginTop:3}}>免费炒股</Text>
                </View>
                <View>
                    <View style = {{width:Screen.window.width,alignItems:'center'}}>
                        <Text>活动规则</Text>
                    </View>
                    <Text style = {{marginLeft:15,lineHeight:20,marginTop:30}}>
                        1.赠送2000元实盘资金（完全免费）；{'\n'}
                        2.您教100元保证金（结束时如无亏损全额返还，如亏损则扣除亏损剩余返还）；{'\n'}
                        3.总共2100元实盘资金（由您操盘，盈利全归您）；{'\n'}
                        4.盈利归您，亏损自负（无亏损保证金全额退还，如交易账户总资产低于2000元将会自动平仓并终止体验，亏损将
                        从保证金中扣除，超出保证金亏损部分由涨8承担）；{'\n'}
                        5.免费操盘资金仅限使用2个交易日，第二个交易日只能卖出不能买入，如第二个交易日未卖出股票，系统将在14:00后执行
                        自动卖出指令，不保证卖出价格。
                    </Text>
                </View>
                <View style = {{width:Screen.window.width,alignItems:'center',justifyContent:'center',marginTop:20}}>
                    <TouchableOpacity activeOpacity={1.0}
                        onPress = {this.btnClicked.bind(this)}>
                        <View style = {styles.btnStyle}>
                            <Text style = {{color:'white'}}>立即体验</Text>
                        </View>
                    </TouchableOpacity>
                </View>
             </View>
        );
    }
    btnClicked(){
        this.props.navigator.push({
                title:'免费体验',
                component:StockDetail,
                passProps:{
                    viewTitle:'免费体验',
                }
            });
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  btnStyle:{
    justifyContent:'center',
    alignItems:'center',
    width:150,
    height:40,
    borderRadius:20,
    backgroundColor:'red'
  }
});

module.exports = FreeExp;