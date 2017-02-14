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
var HeadView = require('../Tools/ZXHeadView');
import Screen from '../Tools/ZXCommon';
class Home extends Component {

    render() {
		return (
            <View style={styles.container}>
                <HeadView titleView = {'首页'}/>
                <Image source = {{uri:'image_home'}} style = {styles.imgStyle} />
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

module.exports = Home;