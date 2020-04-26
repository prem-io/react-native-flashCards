import React, { Component } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import * as colors from '../utils/colors'
import DeckCard from './DeckCard'
import { getDecks } from '../utils/api'

export default class DeckList extends Component {
  state = {
    deckList: {}
  }

  componentDidMount() {
    getDecks().then(res => this.setState({ deckList: res }))
  }

  componentDidUpdate(prevProps) {
    prevProps.navigation.addListener('focus', () => {
      getDecks()
        .then(res => this.setState({ deckList: res }))
    })
  }

  //Extracting item key for FlatList rendering
  _keyExtractor = (item, index) => (index.toString());

  //handling navigation routes to redirect user to the deck detail page
  navigateToDeck = (deck) => {
    this.props.navigation.navigate('QueList', { deck })
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={Object.values(this.state.deckList)}
        keyExtractor={this._keyExtractor}
        renderItem={({ item, index }) => <DeckCard deck={item} indx={index} navigateToDeck={this.navigateToDeck} />}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  }
})
