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
  Image,
  TouchableOpacity
} from 'react-native';
// 第三方摄像头
import  ImagePicker from 'react-native-image-picker';
var Platform = require('react-native').Platform;
var photoOptions = {
    //底部弹出框选项
    title:'选取照片',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
};
var HeadView = require('../../Tools/ZXHeadView');
import Screen from '../../Tools/ZXCommon'



var Address = require('./ZXAddress');
var ChangeTel = require('./ZXChangeTel');

var RealName = require('../BindBank/ZXRealName');
var ChangePwd = require('./ZXChagePwd');
class Setting extends Component {

    constructor(props){
        super(props);

        this.state={
            user : {avatar:'default'}
        };
    }
    render() {
    var   spaceStyle = {
            marginTop:10
        };
        return (
            <View style={styles.container}>
                <HeadView titleView = {this.props.viewTitle}
                    leftIcon = {''}
                    leftIconAction = {()=>{
                        this.props.navigator.pop()}}/>
                <ScrollView style={styles.container}>
                    {this._renderCell(this.state.user,'','修改头像',styles.headIconStyle)}
                    {this._renderCell({uri:'icon_setting_tel'},'绑定手机号','13122041562',null,spaceStyle)}
                    {this._renderCell({uri:'icon_setting_bank'},'绑定银行卡','',null)}
                    {this._renderCell({uri:'icon_setting_login'},'登录密码','已设置',null,spaceStyle)}
                    {this._renderCell({uri:'icon_setting_money'},'提款密码','已设置',null)}
                    {this._renderCell({uri:'icon_setting_exit'},'退出当前帐号','',null,spaceStyle)}
                </ScrollView>
            </View>
        );
    }

    componentDidMount(){
        // 耗时操作在该函数中实现
    }
    _cellSelected(title){
        if(title === '收货地址'){
            this.props.navigator.push({
                title:title,
                component:Address,
                passProps:{
                    viewTitle:title
                }
            });

        }else if(title === '绑定手机号'){
            this.props.navigator.push({
                title:title,
                component:ChangeTel,
                passProps:{
                    viewTitle:title,
                    tel:'13122041562'
                }
            });
        }else if(title === '绑定银行卡'){
            this.props.navigator.push({
                title:title,
                component:RealName,
                passProps:{
                    viewTitle:'绑定银行卡'
                }
            }); 
        }else if(title === '登录密码' || title === '提款密码'){
            this.props.navigator.push({
                title:title,
                component:ChangePwd,
                passProps:{
                    viewTitle:'设置'+title
                }
            }); 
        }else if(title === '退出当前帐号'){
          alert('退出当前帐号');
        }else {
            ImagePicker.showImagePicker(photoOptions,(response) =>{
                    if (response.didCancel){
                        return
                    }
                // or a reference to the platform specific asset location
                    if (Platform.OS === 'ios') {
                        const source = {uri: response.uri.replace('file://', ''), isStatic: true};
                    } else {
                        const source = {uri: response.uri, isStatic: true};
                    }
                    this.setState({
                        user:source
                    })
            })
        }
    }

    _renderCell(imageStr,title,desc,headIconStyle,spaceStyle){
        return(
            <TouchableOpacity
                activeOpacity = {1.0}
                onPress = {this._cellSelected.bind(this,title)}>
                <View style = {[styles.cellStyle,spaceStyle]}>
                    <View style = {[{flexDirection:'row'},{marginLeft:5}]}>
                        <Image source = {imageStr} style = { headIconStyle !== null ? headIconStyle: styles.iconStyle} />
                        <Text style = {{marginLeft:5}}> {title}</Text>
                    </View>
                    <View style = {{flexDirection:'row',marginLeft:5,alignItems:'center'}}>
                        <Text>{desc}</Text>
                        <Image source = {{uri:'icon_right_arrow'}} style = {styles.arrowStyle} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Screen.window.backColor
  },
  cellStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:0.5,
    borderBottomColor:'gray',
    alignItems:'center',
    height:44,
    backgroundColor:'white'
  },
  iconStyle:{
    height:15,
    width:15
  },
  headIconStyle:{
    width:30,
    height:30,
    borderRadius:15,
    marginLeft:15
  },
  arrowStyle:{
    height:10,
    width:10,
    marginRight:15,
    marginLeft:10
  }
});

module.exports = Setting;