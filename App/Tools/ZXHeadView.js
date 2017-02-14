/**
 * Created by ljunb on 16/5/8.
 * 导航栏标题
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import Common from './ZXCommon';

 class Header extends React.Component {
    render() {

        let NavigationBar = [];
        // 左边图片按钮
        if (this.props.leftIcon != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'leftIcon'}
                    activeOpacity={0.75}
                    onPress={this.props.leftIconAction}
                    >
                    <View style = {styles.left_view}>
                       <Image source = {{uri:'btn_back_unclick'}} style = {styles.arrowStyle} />
                    </View>
                </TouchableOpacity>
            )
        }

        // 标题
        if (this.props.title != undefined) {
            NavigationBar.push(
                <Text key={'title'} style={styles.title}>{this.props.title}</Text>
            )
        }

        // 自定义标题View
        if (this.props.titleView != undefined) {
            let Component = this.props.titleView;

            NavigationBar.push(
                <Text key={'titleView'} style={(this.props.leftIcon == undefined)? styles.title_view_no_left : styles.title_view_contain_left}>{this.props.titleView}</Text>
            )
        }

        if (this.props.rightButton != undefined) {
            NavigationBar.push(
              <TouchableOpacity
                  key={'rightIcon'}
                  activeOpacity={0.75}
                  onPress={this.props.collectIconAction}
                  style = {styles.rightButtonStyle}
                  >
                  {this.props.rightButton}
              </TouchableOpacity>
            )
        }

        return (
            <View style={styles.navigationBarContainer}>
                {NavigationBar}
            </View>
        )
    }
}

const styles = StyleSheet.create({

    navigationBarContainer: {
      // flex: 1,
        marginTop: 0,
        flexDirection: 'row',
        height: 64,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        backgroundColor: 'white',
    },

    title: {
        fontSize: 15,
        marginLeft: 15,
        color: 'rgb(6,6,6)',
        alignSelf: 'flex-start',
    },
    title_view_contain_left: {
        fontSize: 18,
        marginTop: 10,
        color: 'black',
        marginLeft:Common.window.width/2-70,
    },
    title_view_no_left: {
      fontSize: 18,
      marginTop: 10,
      color: 'black',
      marginLeft: Common.window.width/2-30,
    },
    leftIcon: {
       left: -Common.window.width/2+45,
    },

    left_view: {
      flexDirection: 'row',
      marginLeft: 10,
      marginTop: 5,
    },
    left_title: {
      fontSize: 15,
      color: 'black',
      alignSelf: 'center',
      marginLeft: 5,
      paddingTop: 4,
    },
    rightButtonStyle:{
        height:64,
        width:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'transparent',
        position:'absolute',
        right:0,
        top:0
    },
    arrowStyle:{
        height:25,
        width:25
    },
})
module.exports = Header;
