import React, { Component } from 'react';
import { Provider } from 'react-redux';

import {
	View,
	StyleSheet,
	Platform,
	StatusBar,
	YellowBox,
} from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

import {
	Constants,
	AppLoading,
	Asset,
	Font,
	Icon,
} from 'expo';

import store from './store'

import TopBar from './components/TopBar/index';
import FolderStructure from './components/FolderStructure/index';
import Control from './components/Control/index';

export default class App extends Component {
	state = {
		isLoadingComplete: false,
	};

	render() {
		if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
			return (
				<AppLoading
					startAsync={this._loadResourcesAsync}
					onError={this._handleLoadingError}
					onFinish={this._handleFinishLoading}
				/>
			);
		} else {
			return (
				<Provider store={store}>
					<View style={styles.container}>
						{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
						<TopBar />
						<FolderStructure />
						<Control />
					</View>
				</Provider>
			);
		}
	}

	_loadResourcesAsync = async () => {
		return Promise.all([
			Asset.loadAsync([
				require('../assets/images/rocket-icon.png'),
				require('../assets/images/rocket-icon.png'),
			]),
			Font.loadAsync({
				...Icon.Ionicons.font,
				// We include SpaceMono because we use it in HomeScreen.js. Feel free
				// to remove this if you are not using it in your app
				'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
			}),
		]);
	};

	_handleLoadingError = error => {
		console.warn(error);
	};

	_handleFinishLoading = () => {
		this.setState({ isLoadingComplete: true });
	};
}

if (__DEV__) {
	console.ignoredYellowBox = ['Remote debugger'];
}


const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight,
		flex: 1,
	},
});