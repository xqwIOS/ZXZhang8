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
  ListView,
  Image,
  TouchableOpacity,
  Platform,
  Linking
} from 'react-native';

import {NativeModules}from 'react-native';

var TelPhone = NativeModules.ZXTelPhone
var dataList = require('./Data.json');

var HeadView = require('../Tools/ZXHeadView');
import Screen from '../Tools/ZXCommon'

var Wallet = require('./Wallet/ZXWallet');
var Setting = require('./Setting/ZXSetting');

var AssetStati = require('./ZXAssetStati');
var AboutUs = require('./ZXAboutUs');
class Mine extends Component {

	constructor(props){
        super(props);
		var getSectionData = (dataBlob,sectionId) =>{
            return dataBlob[sectionId];
        };
        var getRowData = (dataBlob,sectionId,rowId) =>{
            return dataBlob[sectionId+':'+rowId];
        }
        var ds = new ListView.DataSource({
            getSectionData:getSectionData,
            getRowData:getRowData,
            rowHasChanged:(r1,r2) => r1 !== r2,
            sectionHeaderHasChanged:(s1,s2) => s1 !== s2
        });
        this.state={
            dataSource:ds
        };
    }
	render() {
        return (
            <View style={styles.container}>
                <HeadView titleView = {'我'}/>
		        <ListView
		              dataSource = {this.state.dataSource}
		              renderRow = {this._renderRow.bind(this)}
		              renderSectionHeader = {this._renderSectionHeader}
		              renderHeader = {this._renderHeader.bind(this)}/>
            </View>
        );
    }

    componentDidMount(){
        // 耗时操作在该函数中实现
        this.loadData();
    }

    loadData(){
        var dataBlob = {},
            sectionIds = [],
            rowIds = [],
            rows = [];

        for(var i =0;i<dataList.length;i++){
	        sectionIds.push(i);
            dataBlob[i] = dataList[i].sectionID;
            rows = dataList[i].rows;
            rowIds[i] = [];
            for(var j = 0; j<rows.length;j++){
                rowIds[i].push(j);
                dataBlob[i+':'+j] = rows[j];
            }
        }

        this.setState({
            dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIds,rowIds)
        });

    }

	_cellSelected(sectionId,rowId){
        if(sectionId === 0){
            this.props.navigator.push({
                title:'钱包',
                component:Wallet,
            });
        }
        if(sectionId === 1){
            this.props.navigator.push({
                title:'资产统计',
                component:AssetStati,
                passProps:{
                    viewTitle:'资产统计',
                }
            });
        }
        if(sectionId === 2){
            alert('跳进我的订单界面');
        }
        if(sectionId === 3){
            if(rowId === 0){
                if(Platform.OS === 'ios'){
                    TelPhone.telPhone('4009911360');
                }else{
                    Linking.canOpenURL('tel:4009911360')
	                    .then(supported => {
                            if (!supported) {
                                console.log('Can\'t handle url:tel:4009911360' );
                            } else {
                                return Linking.openURL('tel:4009911360');
                            }
                        })
                        .catch(err => console.error('An error occurred', err));
                }
            }
        if(rowId === 1){
            alert('在线客服');
        }
        if(rowId === 2){
            this.props.navigator.push({
                title:'关于我们',
                component:AboutUs,
                passProps:{
                  viewTitle:'关于我们',
                }
            });
        }
    }
}

	_renderRow(rowData,sectionId,rowId){
        return(
            <TouchableOpacity
                activeOpacity = {0.5}
                onPress = {this._cellSelected.bind(this,sectionId,rowId)}>
                <View style = {styles.cellStyle}>
                    <View style = {[{flexDirection:'row'},{marginLeft:5}]}>
                        <Image source = {{uri:rowData.image}} style = {styles.iconStyle} />
                        <Text style = {{marginLeft:5}}> {rowData.title}</Text>
                    </View>
                    <View>
                        <Image source = {{uri:'icon_right_arrow'}} style = {styles.arrowStyle} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    _renderSectionHeader(sectionID){
        if(sectionID === 0){
            return null;
        }
        return(
            <View style= {[{height:10}]}></View>
        );
    }

     _renderHeader(){
        return(
            <TouchableOpacity
                activeOpacity = {1.0}
                onPress = {this.goToSetting.bind(this)}>
                <View style= {styles.headViewStyle}>
                    <View></View>
                    <View ref = "iconView" style = {[{alignItems:'center'},{justifyContent:'center'}]}>
                        <Image source = {{uri:'icon_header'}} style = {styles.headIconStyle} />
                        <Text style = {{marginTop:8}}>13122041562</Text>
                    </View>
                    <Image source = {{uri:'icon_right_arrow'}} style = {styles.arrowStyle} />
                </View>
            </TouchableOpacity>
      
        );
    }
    goToSetting(){
        this.props.navigator.push({
	        title:'个人设置',
	        component:Setting,
	        passProps:{
		        viewTitle:'个人设置',
	        }
        });
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Screen.window.backColor,
  },
  cellStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:0.5,
    alignItems:'center',
    height:40,
    backgroundColor:'white'
  },
  iconStyle:{
    height:15,
    width:15
  },
  headViewStyle:{
    height:150,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:0.5,
    backgroundColor:'white'
  },
  headIconStyle:{
    width:50,
    height:50,
    borderRadius:25
  },
  arrowStyle:{
    height:10,
    width:10,
    marginRight:15
  },
});

module.exports = Mine;