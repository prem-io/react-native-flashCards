import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Constants from 'expo-constants'
import * as colors from './utils/colors'
import { FontAwesome, Ionicons, FontAwesome5 } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import DeckList from './components/DeckList'
import CreateDeck from './components/CreateDeck'
import DeckCard from './components/DeckCard'
import AddQue from './components/AddQue'
import QueCard from './components/QueCard'
import QueList from './components/QueList'
import QuizCard from './components/QuizCard'
import QuizContainer from './components/QuizContainer'
import NoCards from './components/NoCards'
import Results from './components/Results'

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tab = Platform.OS === 'ios' ? createBottomTabNavigator() : createMaterialTopTabNavigator()

const tabIcon = (tab, color, size) => {
  if (tab === "Decks") {
    return <FontAwesome5 name={'elementor'} size={size} color={color} />
  } else if (tab === "Add Deck") {
    return <FontAwesome name={'plus-square'} size={size} color={color} />
  }
}

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: colors.blue,
    inactiveTintColor: colors.grey,
    showIcon: true
  }
}

const MainNav = () => {
  return (
    <Tab.Navigator {...TabNavigatorConfig}>
      <Tab.Screen
        name="Decks"
        component={DeckList}
        options={{
          tabBarIcon: ({ focused, color, size }) => (tabIcon('Decks', color, 25)),
          title: 'Decks'
        }}
      />
      <Tab.Screen
        name="Add Deck"
        component={CreateDeck}
        options={{
          tabBarIcon: ({ focused, color, size }) => (tabIcon('Add Deck', color, 25)),
          title: 'Add Deck'
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppStatusBar backgroundColor={colors.blue} barStyle='light-content' />
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    </View>
  )
}
