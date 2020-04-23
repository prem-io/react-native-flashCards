import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as colors from '../utils/colors'
import Button from './Button'

function DeckCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>React</Text>
      <Text style={styles.count}>{5} Cards</Text>
      <Button onPress={() => console.log('View Deck')}>View Deck</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40,
    alignSelf: "stretch",
    alignItems: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.95,
    elevation: 25,
    shadowColor: 'rgba(0,0,0,0.8)',
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  title: {
    fontSize: 22,
    width: '100%',
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    letterSpacing: 1
  },
  count: {
    fontSize: 16,
    color: colors.black
  }
})

export default DeckCard
