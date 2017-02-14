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
  TouchableOpacity
} from 'react-native';
var HeadView = require('../../Tools/ZXHeadView');
import MainScreen from '../../Tools/ZXCommon';
var marginSpace = 5;
var itemsWH = (MainScreen.window.width-marginSpace*3)/2
class Shop extends Component {

    constructor(props){
        super(props);
        this.state={
            inputValue:''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <HeadView   titleView = {'商城'}
                            leftIcon = {''}
                            leftIconAction = {()=>{
                                this.props.navigator.pop()}}/>
                <ScrollView>
                    <View style = {{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
                        {this.renderItems(5)}
                    </View>
                </ScrollView>
            </View>
        );
    }
    renderItems(count){
        var itemList = [];
        for(var i = 0;i<count;i++){
            itemList.push(
                <TouchableOpacity
                    style = {{height:itemsWH,marginBottom:marginSpace}}
                    key = {'item'+i}
                    onPress = {this.itemClicked.bind(this,i)}>
                    <View  style = {styles.itemStyle}>
                        <View style = {{width:100,height:100,backgroundColor:'green'}}></View>
                        <Text>移动充值卡</Text>
                        <Text>💰 50</Text>
                    </View>
                </TouchableOpacity>
            );
        }
      
        return itemList;
    }
    itemClicked(index){
        alert('选择了商品'+index);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  itemStyle:{
      width:itemsWH,
      height:itemsWH,
      marginTop:marginSpace,
      marginLeft:marginSpace,
      backgroundColor:'yellow',
      borderRadius:2,
      
  },
});

module.exports = Shop;