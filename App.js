import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import CreateDeck from './components/CreateDeck'
import DeckCard from './components/DeckCard'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ScrollView style={styles.scrollView}> */}
      <CreateDeck />
      {/* </ScrollView> */}
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
  },
  scrollView: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: 'pink',
  }
})
