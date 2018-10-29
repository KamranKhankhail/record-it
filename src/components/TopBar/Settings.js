import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { } from 'expo';

import Icon from 'react-native-vector-icons/FontAwesome';
const optionsIcon = (<Icon name="ellipsis-v" size={40} color='black' />)

export default class Settings extends Component {
	render() {
		return (
			<TouchableOpacity style={styles.settingsIcon}>
				{optionsIcon}
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	settingsIcon: {
		flex: 1,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
	},
});