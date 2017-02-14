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
  Image,
  Platform,
  Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
var Home = require('../Home/ZXHome');
var Find = require('../Find/ZXFind');
var Mine = require('../Mine/ZXMine');

var iconWH = Platform.OS === 'ios' ? 30 : 25;


const tabBarItems = [
    {
        title: '首页', 
        icon: () => <Image style={styles.iconStyle}source={{uri:'icon_tabbar_home'}}/>, 
        iconSelected: () => <Image style={styles.iconStyle}source={{uri:'icon_tabbar_home_selected'}}/>,
        component: Home 
    },
    {
        title: '发现', 
        icon: () => <Image style={styles.iconStyle} source={{uri:'icon_tabbar_find'}}/>,
        iconSelected: () => <Image style={styles.iconStyle}source={{uri:'icon_tabbar_find_selected'}}/>, 
        component: Find 
    },
    { 
        title: '我',
        icon: () => <Image style={styles.iconStyle} source={{uri:'icon_tabbar_mine'}}/>,
        iconSelected: () => <Image style={styles.iconStyle}source={{uri:'icon_tabbar_mine_selected'}}/>, 
        component: Mine 
    }

]

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: tabBarItems[0].title,
        };
  }
    render() {
        return (
            <TabNavigator
                tabBarStyle = {{backgroundColor:'white',height:56}}>
                {
                    tabBarItems.map((controller, i) => {
                        let Component = controller.component;
                        return (
                            <TabNavigator.Item
                                key= {i}
                                selected={this.state.selectedTab === controller.title}
                                title={controller.title}
                                selectedTitleStyle = {styles.tabTitleStyle}
                                renderIcon={controller.icon}
                                renderSelectedIcon = {controller.iconSelected}
                                onPress={() => this.setState({ selectedTab: controller.title }) }>
                                <Component navigator = {this.props.navigator} {...this.props}/>
                            </TabNavigator.Item>
                        )
                    })
                }
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
  iconStyle: {
    width: Platform.OS === 'ios' ? 25 : 20,
    height: Platform.OS === 'ios' ? 25 : 20
  },
  tabTitleStyle:{
    color:'black'
  }
});

module.exports = Main;