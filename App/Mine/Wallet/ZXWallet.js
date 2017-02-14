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
  TouchableOpacity,
  Image
} from 'react-native';
var HeadView = require('../../Tools/ZXHeadView');
var WalletDetail = require('./ZXWalletDetail');
import Screen from '../../Tools/ZXCommon';
class Wallet extends Component {

    constructor(props){
		super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <HeadView titleView = {'钱包'}
                    leftIcon = {''}
                    leftIconAction = {()=>{
                        this.props.navigator.pop()}}/>
                <ScrollView>
                    <TouchableOpacity activeOpacity = {1.0}
                        onPress = {this.cellSelected.bind(this,'现金账户',75.24)}>
                        <View style= {styles.accountViewStyle}>
                            <View style = {[{alignItems:'center'},{justifyContent:'center'}]}>
                                <Text style = {{color:'white',fontSize:10}}>现金账户</Text>
                                <Text style = {{color:'yellow',marginTop:5,fontSize:18}}>75.24</Text>
                            </View>
	                        <View style = {[styles.arrowViewStyle,{top:43}]}>
	                            <Image source = {{uri:'icon_right_arrow'}} style = {styles.arrowStyle} />
	                        </View>
                        </View>
                    </TouchableOpacity>
                    <View style = {{marginTop:10}}>
                        {this.renderCell('我的金币',0)}
                        {this.renderCell('我的积分',75)}
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderCell(title,count){
        return(
            <TouchableOpacity activeOpacity = {1.0}
                onPress = {this.cellSelected.bind(this,title,count)}>
                <View style = {styles.cellViewStyle}>
                    <View style = {[{marginLeft:5}]}>
	                    <Text>{title}</Text>
                    </View>
                    <View style = {[{flexDirection:'row'},{marginRight:8}]}>
                        <Text style= {{marginRight:5}}>{count}</Text>
                        <Image source = {{uri:'icon_right_arrow'}} style = {styles.arrowStyle} />
                    </View>
                </View>
            </TouchableOpacity>
        );
	}

	cellSelected(title,num){
        this.props.navigator.push({
            title:{title},
            component:WalletDetail,
            passProps:{
                viewTitle:title,
                count:num
            }
		});
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Screen.window.backColor,
  },
  accountViewStyle:{
    height:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(109,109,124)',
    flexDirection:'row'
  },
  arrowViewStyle:{
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    right:5
  },
  cellViewStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'white',
    height:44,
    borderBottomWidth:0.5
  },
  arrowStyle:{
    height:10,
    width:10,
    marginRight:5
  },
});

module.exports = Wallet;