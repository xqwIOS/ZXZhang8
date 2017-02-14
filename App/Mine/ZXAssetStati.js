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
import PercentageCircle from 'react-native-percentage-circle';
class AssetStati extends Component {

    render() {
        return (
            <View style={styles.container}>
                <HeadView titleView = {this.props.viewTitle}
                    leftIcon = {''}
                    leftIconAction = {()=>{
                        this.props.navigator.pop()}}/>
                <View style = {{marginTop:20,flex:1,alignItems:'center'}}>
                    <PercentageCircle radius={150}
						percent={50}
						borderWidth = {80}
						color={"#3498db"}
						disabled = {false}/>
                    <View style = {{marginTop:100,width:Screen.window.width,flexDirection:'row',justifyContent:'space-around'}}>
                        {this._renderItem('证券净值','red','0.00')}
                        {this._renderItem('现金余额','blue','280.19')}
                    </View>
                </View>
            </View>
        );
    }
    _renderItem(title,color,money){
        return(
            <View style = {{alignItems:'center'}} >
                <View style = {{flexDirection:'row'}}>
                    <View style = {{height:10,width:10,backgroundColor:color}}>

                    </View>
	                <Text style = {{marginLeft:10,fontSize:11}}>{title}</Text>
                </View>
	            <Text style = {{fontSize:11}}>{money}</Text>
			</View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Screen.window.backColor,
  },
});

module.exports = AssetStati;