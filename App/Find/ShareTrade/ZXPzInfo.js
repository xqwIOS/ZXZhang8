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
    TouchableOpacity,
    ScrollView,
    Image,
    Animated
} from 'react-native';
var HeadView = require('../../Tools/ZXHeadView');
import Screen from '../../Tools/ZXCommon';
var TradeCom = require('./ZXTradeCom');
var btnSpace = 15;
var btnWidth = (Screen.window.width - 6*btnSpace)/3;
var btnHeight = 28;

var AddBail = require('./ZXAddBail');
var ExtractProfit = require('./ZXExtractProfit');
var EnlargedCon = require('./ZXEnlargedCon');
class PzInfo extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={styles.container}>
                <HeadView
                    titleView = {'股票交易'}
                    leftIcon = {''}
                    leftIconAction = {()=>{
                        this.props.navigator.popToTop()}}
                    rightButton = {PzInfo.renderRightBtn()}
                    collectIconAction = {()=>{
                        alert('点击了右边按钮')
                    }}/>
                <View style = {{flexDirection:'row',marginTop:25,justifyContent:'space-between'}}>
                        <View style = {{marginLeft:15}}>
                            <Text style = {{fontSize:12}}>当前盈亏</Text>
                            <Text style = {{fontSize:14,marginTop:10,color:'red'}}>0.00</Text>
                            <Text style = {{fontSize:10,marginTop:10,color:'red'}}>+0.00%</Text>
                        </View>
                        <View style = {{marginRight:15}}>
                            <Text style = {{fontSize:11}}>现金余额：2250</Text>
                            <Text style = {{fontSize:11,marginTop:10}}>操盘资金：2250</Text>
                            <Text style = {{fontSize:11,marginTop:10}}>投资本金：250</Text>
                        </View>
                </View>
                <View style = {styles.btnViewStyle}>
                    {this.renderBtn('追加保证金')}
                    {this.renderBtn('提取利润')}
                    {this.renderBtn('放大合约')}
                    {this.renderBtn('申请结算')}
                 </View>
                <View style={{flex:1,marginTop:10,alignItems:'center'}}>
                </View>
                <TouchableOpacity
                    style = {styles.bottomViewStyle}
                    activeOpacity = {1.0}
                    onPress = {this.btnClicked.bind(this,'股票交易')}>
                        <View style = {styles.bottomViewStyle}>
                            <Text style = {{color:'white',fontSize:14}}>股票交易</Text>
                        </View>
                </TouchableOpacity>
            </View>
        );
    }

    componentDidMount() {


    }
    renderBtn(title){
        if(this.props.isFreeExp === true){
            return null;
        }else{
            return(
                <TouchableOpacity
                    key = {title}
                    activeOpacity = {1.0}
                    onPress = {this.btnClicked.bind(this,title)}>
                    <View style = {styles.btnStyle}>
                        <Text style = {{color:'white',fontSize:12}}>{title}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
    }

    btnClicked(title){
        if(title === '股票交易'){
            this.props.navigator.push({
                title:'交易委托',
                component:TradeCom,
                passProps:{
                    viewTitle:'交易委托'
                }
            });
        }else if(title === '追加保证金'){
            this.props.navigator.push({
                title:title,
                component:AddBail,
                passProps:{
                    viewTitle:title,
                    count:305.52
                }
            });
        }else if(title === '提取利润'){
            this.props.navigator.push({
                title:title,
                component:ExtractProfit,
                passProps:{
                    viewTitle:title,
                    count:305.52
                }
            });
        }else if(title === '放大合约'){
            this.props.navigator.push({
                title:title,
                component:EnlargedCon,
                passProps:{
                    viewTitle:title,
                    count:2250.00
                }
            });
        }else{
            alert('点击了按钮'+title);
        }
      
    }

    static renderRightBtn(){
        return(
            <Image source = {{uri : 'icon_trade_history'}} style={{marginTop:14,height:15,width:15}} />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  btnViewStyle:{
      flexDirection:'row',
      flexWrap : 'wrap',
      height:100,
      borderTopWidth:0.5,
      borderBottomWidth:0.5,
      alignItems:'center',
      marginTop:20,
      paddingTop:15
  },
  btnStyle:{
      justifyContent:'center',
      alignItems:'center',
      width:btnWidth,
      height:btnHeight,
      backgroundColor:'black',
      borderRadius:btnHeight/2,
      marginLeft:btnSpace,
      marginRight:btnSpace,
      marginTop:10
  },
  bottomViewStyle:{
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      bottom:0,
      height:40,
      width:Screen.window.width,
      backgroundColor:'black'
  }
});

module.exports = PzInfo;