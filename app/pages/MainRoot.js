import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from './Home'
import Favorite from './Favorite'
import Settings from './Settings'

const Tab = createBottomTabNavigator();

class MainRoot extends Component {
	render() {
		return (
			<Tab.Navigator
				tabBarOptions={{
					activeTintColor: "#e91e63",
					style: { paddingBottom: 6, height: 60 },
				}}
				initialRouteName="Home"
			>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						tabBarLabel: "Home",
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name="home" color={color} size={26} />
						)
					}}
				/>
				<Tab.Screen name="Favorites" component={Favorite} options={{
					tabBarLabel: "Favorites",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="heart" color={color} size={26} />
					)
				}} />
				<Tab.Screen name="Settings" component={Settings} options={{
					tabBarLabel: "Settings",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="cog" color={color} size={26} />
					)
				}} />
			</Tab.Navigator >
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
	}
})


export default MainRoot