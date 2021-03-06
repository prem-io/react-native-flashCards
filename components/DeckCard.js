import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as colors from '../utils/colors'
import Button from './Button'

function DeckCard({ deck, indx, navigateToDeck }) {
  const { title, questions } = deck

  return (
    <View style={[styles.card, { marginTop: (indx !== 0) ? 0 : 25 }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.cardCount}>{questions.length} Cards</Text>
      <Button onPress={() => navigateToDeck(deck)}>View Deck</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 30,
    alignItems: 'center',
    elevation: 2.5,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOffset: { width: 0, height: 3 }
  },
  title: {
    fontSize: 22,
    width: '100%',
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5
  },
  cardCount: {
    fontSize: 16,
    color: colors.black
  }
})

export default DeckCard
