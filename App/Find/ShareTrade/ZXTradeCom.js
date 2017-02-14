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
  Platform
} from 'react-native';
var HeadView = require('../../Tools/ZXHeadView');
import Screen from '../../Tools/ZXCommon';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
var Comminsion = require('./ZXComType');
class TradeCom extends Component {

    constructor(props){
        super(props);
        this.state={
			tabNames: ['持仓', '买入', '卖出', '撤单', '查询']
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <HeadView 
                    titleView = {'交易委托'}
                    leftIcon = {''}
                    leftIconAction = {()=>{
                        this.props.navigator.pop()}}/>
                <ScrollView style={styles.container}>
                    <View style = {{backgroundColor:'yellow',flexDirection:'row',justifyContent:'space-between',height:30,alignItems:'center',width:Screen.window.width}}>
                        <Text style = {{fontSize:10}}>当前额度</Text>
                        <Text style = {{fontSize:10,color:'red'}}>2250.00元</Text>
                    </View>
                    <ScrollableTabView 
                        style = {{marginTop:10}}
                        renderTabBar={() => <ScrollableTabBar />}
                        locked = {true}>
                        <Comminsion tabLabel="持仓" navigator = {this.props.navigator} />
                        <Comminsion tabLabel="买入" navigator = {this.props.navigator} />
                        <Comminsion tabLabel="卖出" navigator = {this.props.navigator} />
                        <Comminsion tabLabel="撤单" navigator = {this.props.navigator} />
                        <Comminsion tabLabel="查询" navigator = {this.props.navigator} />
                    </ScrollableTabView>
                </ScrollView> 
            </View>
        );
    }
    renderRightBtn(){
        return(
            <Text>👉</Text>
        );
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
    backgroundColor:'gray',
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
    backgroundColor:'black',
    marginTop:50,
    marginLeft:Screen.window.width/3,
    alignItems:'center'
  },
  content: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black',
		flex: 1
	}
});

module.exports = TradeCom;