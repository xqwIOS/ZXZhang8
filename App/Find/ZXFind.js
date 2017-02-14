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
  Image
} from 'react-native';
var HeadView = require('../Tools/ZXHeadView');
import Screen from '../Tools/ZXCommon';
var ShareTrade = require('./ShareTrade/ZXShareTrade');
var FreeExp = require('./ShareFree/ZXFreeExp')
var Shop = require('./Mall/ZXMall');
var imageName = ['image_find_stock','image_find_free','image_find_mall'];
class Find extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <HeadView titleView = {'发现'}/>
                <View style =  {styles.container}>
                    {this.renderMenu(0)}
                    {this.renderMenu(1)}
                    {this.renderMenu(2)}
                </View>
            </View>
        );
    }
    renderMenu(index){
        return(
            <TouchableOpacity
                activeOpacity = {1.0}
                onPress = {this.menuBtn.bind(this,index)}>
                <View style = {styles.menuStyle}>
                    <Image source = {{uri:imageName[index]}} style = {styles.imgStyle} />
                </View>
            </TouchableOpacity>
        );
    }
    menuBtn(index){
        if(index === 0){
            // 跳入股票交易
            this.props.navigator.push({
                title:'股票交易',
                component:ShareTrade,
                passProps:{
                    viewTitle:'股票交易',
                }
            });
        }else if(index === 1){
            this.props.navigator.push({
                title:'免费体验',
                component:FreeExp,
                passProps:{
                    viewTitle:'免费体验',
                }
            });
        }else if(index === 2){
            this.props.navigator.push({
                title:'商城',
                component:Shop,
                passProps:{
                    viewTitle:'商城',
                }
            });
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  menuStyle:{
    height:(Screen.window.middleHeight)/3,
    
  },
  titleStyle: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  imgStyle:{
    height:(Screen.window.middleHeight)/3,
    width:Screen.window.width
  },
});

module.exports = Find