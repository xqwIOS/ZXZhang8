/**
 * Created by xqw on 2017/1/18.
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
class Hisrory extends Component {

	render() {
		return (
			<View style={styles.container}>
				<HeadView
					titleView = {this.props.viewTitle}
					leftIcon = {''}
					leftIconAction = {()=>{
                        this.props.navigator.pop()}}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Screen.window.backColor,
	}
});

module.exports = Hisrory;