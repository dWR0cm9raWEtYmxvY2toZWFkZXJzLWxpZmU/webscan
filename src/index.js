import React, { Component } from 'react';
import {
    Button, Text, View, TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Constants, WebBrowser } from 'expo';

export default class App extends Component {
    state = {
	result: null,
    };

    render() {
	return (
		<View style={styles.container}>
		<Button
            style={styles.paragraph}
            title="Open WebBrowser"
            onPress={this._handlePressButtonAsync}
		/>
		<TouchableOpacity
	    style={{backgroundColor: "#000"}}
		><Text style={{color:'#fff'}}>aa</Text></TouchableOpacity>
		<Text>{this.state.result && JSON.stringify(this.state.result)}</Text>
		</View>
	);
    }

    _handlePressButtonAsync = async () => {
	let result = await WebBrowser.openBrowserAsync('https://baidu.com');
	this.setState({ result });
    };
}

const styles = StyleSheet.create({
    container: {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	paddingTop: Constants.statusBarHeight,
	backgroundColor: '#ecf0f1',
    },
});
