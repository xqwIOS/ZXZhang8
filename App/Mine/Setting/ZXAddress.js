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
  Image
} from 'react-native';
var HeadView = require('../../Tools/ZXHeadView');
import Screen from '../../Tools/ZXCommon';
class Address extends Component {

    render() {
        return (
            <View style={styles.container}>
                <HeadView
	                titleView = {this.props.viewTitle}
                    leftIcon = {''}
	                leftIconAction = {()=>{
                        this.props.navigator.pop()}}
                    rightButton = {<Image source = {{uri : 'icon_setting_add'}} style={{marginTop:14,height:15,width:15}} />}
                    collectIconAction = {()=>{
                        alert('点击了右边按钮')}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Screen.window.backColor,
  },
  imgStyle:{
    width:Screen.window.width,
    height:Screen.window.height
  }
});

module.exports = Address;