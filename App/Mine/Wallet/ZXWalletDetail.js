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
  TouchableOpacity
} from 'react-native';
var HeadView = require('../../Tools/ZXHeadView');
var ScoreExc = require('./ZXScoreExc');
var CoinBuy  = require('./ZXCoinBuy');
var PayPswd  = require('../BindBank/ZXPayPswd');
var BindBank = require('../BindBank/ZXBindBank');
var RealName = require('../BindBank/ZXRealName')
import Screen from '../../Tools/ZXCommon';
class WalletDetail extends Component {
    constructor(props){
        super(props);
        this.state={};
    }

    render() {
        var title = this.props.viewTitle
        var thiz = this
        return (
        <View style={styles.container}>
            <HeadView titleView = {this.props.viewTitle}
                leftIcon = {''}
                leftIconAction = {()=>{
                    this.props.navigator.pop()}}/>
            <ScrollView>
                <View style = {styles.accountViewStyle}>
                    {this.renderHeadView(thiz,this.props.viewTitle,this.props.count)}
                </View>
            </ScrollView>
        </View>
        );
    }
    renderHeadView(thiz,title,count){
        var headView = [];

        headView.push(
            <View key = {title} style = {styles.headTitleStyle}>
                <Text style = {[{fontSize:9},{color:'white'}]}>当前余额</Text>
                <Text style = {[{fontSize:17},{marginTop:5},{color:'yellow'}]}>{count}</Text>
            </View>
        );

        if(title === '现金账户'){
           headView.push(
               <View key = {title+'1'} style = {styles.cashViewStyle}>
                    {thiz.renderBtn(thiz,'提现','white')}
                    {thiz.renderBtn(thiz,'充值','red')}
               </View>
           );
        }else if(title === '我的金币'){
            headView.push(
               <View key = {title+'1'} style = {styles.cashViewStyle}>
                    {thiz.renderBtn(thiz,'兑换金币','white')}
                    {thiz.renderBtn(thiz,'购买金币','red')}
               </View>
           );
        }else if(title === '我的积分'){
            headView.push(
                <View key = {title+'1'} style = {styles.cashViewStyle}>
                    {thiz.renderBtn(thiz,'兑换金币','white')}
               </View>
           );
        }
    return headView;
    }

    renderBtn(thiz,btnName,btnBckColor){
        var textColor =  btnBckColor === 'red' ? 'white':'black';
        return(
            <TouchableOpacity activeOpacity = {1.0}
                onPress = {thiz.btnClicked.bind(this,thiz,btnName)}>
                <View style = {[styles.buttonStyle,{backgroundColor:btnBckColor}]}>
                    <Text style = {[{fontSize:12},{color:textColor}]}>{btnName}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    btnClicked(thiz,btnName){
        if(btnName === '提现'){
            /** 
             * 是否设置提款密码
             * 设置了继续判断是否实名认证-----绑定银行卡---已绑定跳转至提现界面
             * 否则跳转进设置提款密码
             */
            // 1 跳进设置支付密码
            /*
            this.props.navigator.push({
                title:'设置提款密码',
                component:PayPswd,
                passProps:{
                    viewTitle:'设置提款密码',
                }
            });*/
            // 2 跳入实名认证
            /*
            this.props.navigator.push({
                title:'绑定银行卡',
                component:RealName,
                passProps:{
                    viewTitle:'绑定银行卡',
                }
            });    */
            // 3 跳入绑定银行卡
            
            this.props.navigator.push({
                title:'绑定银行卡',
                component:BindBank,
                passProps:{
                    viewTitle:'绑定银行卡',
                }
            });
            // 4 跳入提现界面

        }
        if(btnName === '充值'){
            /** 
             * 是否绑定银行卡
             * 设置了跳转至绑定银行卡界面 否则跳转进充值界面
             */
            this.props.navigator.push({
                title:'绑定银行卡',
                component:RealName,
                passProps:{
                    viewTitle:'绑定银行卡',
                }
            });
        }
        if(btnName === '兑换金币'){
            /** 
             * 跳转进积分兑换界面
             */
            this.props.navigator.push({
                title:{btnName},
                component:ScoreExc,
                passProps:{
                    viewTitle:btnName,
                    count:this.props.count
                }
            });
        }
        if(btnName === '购买金币'){
            /** 
             * 跳转进购买金币界面
             */
            this.props.navigator.push({
                title:{btnName},
                component:CoinBuy,
                passProps:{
                    viewTitle:btnName,
                }
            });
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Screen.window.backColor,
  },
  accountViewStyle:{
    height:100,
    alignItems:'center',
    backgroundColor: 'rgb(109,109,124)',
  },
  headTitleStyle:{
    alignItems:'center',
    marginTop:15  
  },
  cashViewStyle:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      width:Screen.window.width,
      marginTop:10
  },
  buttonStyle:{
      alignItems:'center',
      justifyContent:'center',
      width:80,
      height:26,
      borderRadius:13
  },
  
});

module.exports = WalletDetail;