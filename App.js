import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import * as colors from './utils/colors'
import CreateDeck from './components/CreateDeck'
import DeckCard from './components/DeckCard'
import AddQue from './components/AddQue'
import QueCard from './components/QueCard'
import QueList from './components/QueList'
import QuizCard from './components/QuizCard'
import QuizContainer from './components/QuizContainer'
import NoCards from './components/NoCards'

export default function App() {
  return (
    <View style={styles.container}>
      <NoCards />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    backgroundColor: colors.lightgrey,
    padding: 20
  }
})
