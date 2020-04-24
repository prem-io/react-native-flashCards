import React from 'react'
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import CreateDeck from './components/CreateDeck'
import DeckCard from './components/DeckCard'
import AddQue from './components/AddQue'
import QueCard from './components/QueCard'
import * as colors from './utils/colors'
import QueList from './components/QueList'

export default function App() {
  return (
    <View style={styles.container}>
      <QueList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightgrey,
  }
})
