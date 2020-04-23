import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import DeckCard from './DeckCard'

const DeckList = () => {
  const decks = getDecks()

  renderItem = ({ item }) => {
    return <DeckCard {...item} />
  }

  return (
    <FlatList
      data={}
      renderItem={this.renderItem}
    />
  )
}

export default DeckList

const styles = StyleSheet.create({

})
