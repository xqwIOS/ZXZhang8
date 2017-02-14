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
  ScrollView
} from 'react-native';
var HeadView = require('../../Tools/ZXHeadView');
import Screen from '../../Tools/ZXCommon';
var headList = ['名称/代码','价格/数量','状态/类型','成交时间'];
var headList2 = ['名称/代码','价格/数量','状态/类型','委托时间'];
class FindTrade extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HeadView   titleView = {this.props.viewTitle}
                            leftIcon = {''}
                            leftIconAction = {()=>{
                                this.props.navigator.pop()}}/>
                <ScrollView style={styles.container}>
                    {this.renderHeadTableView()}
                </ScrollView>
            </View>
        );
    }
    renderHeadTableView(){
        var itemList;
        if(this.props.viewTitle === '当日成交' || this.props.viewTitle === '历史成交'){
            itemList = headList;
        }else{
            itemList = headList2;
        }
        var titleArr = [];
        for(var i=0;i<itemList.length;i++){
            titleArr.push(
                <View key = {i}>
                <Text style = {{fontSize:10}}>{itemList[i]}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

module.exports = FindTrade;