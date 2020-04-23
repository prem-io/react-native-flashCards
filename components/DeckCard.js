import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as colors from '../utils/colors'

function DeckCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>React</Text>
      <Text style={styles.count}>{5} Cards</Text>
      <TouchableOpacity onPress={() => console.log('Pressed')}>
        <Text style={styles.button}>View Deck</Text>
      </TouchableOpacity>
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
  },
  button: {
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    margin: 10,
    backgroundColor: colors.blue,
    color: colors.lightgrey,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16
  }
})

export default DeckCard
