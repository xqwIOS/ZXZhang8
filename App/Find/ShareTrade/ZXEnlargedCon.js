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
  TextInput,
  TouchableOpacity,
  ScrollView,
  ListView
} from 'react-native';
var HeadView = require('../../Tools/ZXHeadView');
import Screen from '../../Tools/ZXCommon';
var dataArr ={a:['风险保证金','操盘资金','警戒线','止损线']};
class EnglargedCon extends Component {
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged:(r1,r2) => r1 !== r2,
            sectionHeaderHasChanged:(s1,s2) => s1 !== s2
        });
        this.state = {
            text:'',
            dataSource:ds.cloneWithRowsAndSections(dataArr)
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <HeadView   titleView = {this.props.viewTitle}
                            leftIcon = {''}
                            leftIconAction = {()=>{
                                this.props.navigator.pop()}}/>
                <ScrollView     style={styles.container}
                                scrollEnabled = {false}>
                    <View style={[styles.scoreStyle,{justifyContent:'space-between'}]}>
                        <Text style = {[{fontSize:10},{marginLeft:5}]}>操盘资金</Text>
                        <Text style = {[{fontSize:10},{marginRight:5}]}>{this.props.count}</Text>
                    </View>

                    <View style = {[styles.scoreStyle]} >
                        <View style = {{justifyContent:'center',marginLeft:5}}>
                            <Text style = {{fontSize:10}}>追加本金</Text>
                        </View>
                        <TextInput
                            style={styles.textInputStyle}
                            keyboardType = 'number-pad'
                            placeholder = '请输入放大金额'
                            onChangeText = {(text)=>{this.setState({text})}}
                            underlineColorAndroid = {'transparent'}/>
                    </View>
                    <View style = {{marginTop:10,flex:1}}>
                        <ListView style={styles.container}
                            dataSource = {this.state.dataSource}
                            renderRow = {this._renderRow.bind(this)}
                            renderSectionHeader = {this._renderHead}
                            renderFooter = {this._renderFooter.bind(this,this.state.text)}/>
                    </View>
                </ScrollView>

                <TouchableOpacity
                    style = {styles.btnStyle}
                    activeOpacity={1.0}
                    onPress = {this._btnClicked.bind(this,this.state.text*100)}>
                    <View style = {styles.btnStyle}>
                        <Text style = {{color:'white'}}>确认</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    _renderHead(){
        return(
            <View style = {{backgroundColor:'yellow',borderBottomWidth:0.5,borderTopWidth:0.5,flexDirection:'row',justifyContent:'space-between',height:30,alignItems:'center'}}>
                <View>
                </View>
                <Text style = {{fontSize:10}}>放大前</Text>
                <Text style = {{fontSize:10}}>放大后</Text>
            </View>
        );
    }
    _renderFooter(text){
        var money =  text === "" ? '0.0':text;
        return(
            <View style = {{borderBottomWidth:0.5,flexDirection:'row-reverse',alignItems:'center',height:40}}>
                <Text style = {{fontSize:10}}>{'补充保证金'+money+'元+追加保证金'+money+'元'}</Text>
            </View>
        );
    }
    _btnClicked(score){
        if(this.props.count > score){
            alert('购买成功')
        }else{
            alert('积分不足')
        }
    }

    _renderRow(rowData){
        return(
            <View style = {styles.cellStyle}>
                <Text style = {{fontSize:10,marginLeft:5}}>{rowData}</Text>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  scoreStyle:{
    flexDirection:'row',
    alignItems:'center',
    height:40,
    borderBottomWidth:0.5
  },
  textInputStyle:{
    height: 40, 
    width:Screen.window.width*0.8,
    fontSize:10,
    marginLeft:10,
    textAlign:'right'
  },
  btnStyle:{
    justifyContent:'center',
    width:Screen.window.width,
    height:30,
    backgroundColor:'black',
    alignItems:'center',
    position:'absolute',
    bottom:0
  },
  cellStyle:{
      flexDirection:'row',
      justifyContent:'space-between',
      height:40,
      alignItems:'center',
      borderBottomWidth:0.5
  },
});

module.exports = EnglargedCon;