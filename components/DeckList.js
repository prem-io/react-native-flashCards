import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import DeckCard from './DeckCard'
import * as colors from '../utils/colors'

const deckList = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'JavaScript is considered a weakly typed (or untyped) language?',
        answer: 'Correct'
      },
      {
        question: 'Closure is a combination of a function and lexical environment within which that function was declared?',
        answer: 'Yes'
      }
    ]
  },
  Java: {
    title: 'Java',
    questions: [
      {
        question: 'JavaScript is considered a weakly typed (or untyped) language?',
        answer: 'Correct'
      },
      {
        question: 'Closure is a combination of a function and lexical environment within which that function was declared?',
        answer: 'Yes'
      }
    ]
  },
  Node: {
    title: 'Node',
    questions: [
      {
        question: 'JavaScript is considered a weakly typed (or untyped) language?',
        answer: 'Correct'
      },
      {
        question: 'Closure is a combination of a function and lexical environment within which that function was declared?',
        answer: 'Yes'
      }
    ]
  },
  Nodee: {
    title: 'Node',
    questions: [
      {
        question: 'JavaScript is considered a weakly typed (or untyped) language?',
        answer: 'Correct'
      },
      {
        question: 'Closure is a combination of a function and lexical environment within which that function was declared?',
        answer: 'Yes'
      }
    ]
  }, Nde: {
    title: 'Node',
    questions: [
      {
        question: 'JavaScript is considered a weakly typed (or untyped) language?',
        answer: 'Correct'
      },
      {
        question: 'Closure is a combination of a function and lexical environment within which that function was declared?',
        answer: 'Yes'
      }
    ]
  }, Noe: {
    title: 'Node',
    questions: [
      {
        question: 'JavaScript is considered a weakly typed (or untyped) language?',
        answer: 'Correct'
      },
      {
        question: 'Closure is a combination of a function and lexical environment within which that function was declared?',
        answer: 'Yes'
      }
    ]
  }, Nod: {
    title: 'Node',
    questions: [
      {
        question: 'JavaScript is considered a weakly typed (or untyped) language?',
        answer: 'Correct'
      },
      {
        question: 'Closure is a combination of a function and lexical environment within which that function was declared?',
        answer: 'Yes'
      }
    ]
  }
}

const DeckList = (props) => {
  //handling navigation routes to redirect user to the deck detail page
  const navigateToDeck = (deck) => {
    console.log(deck)
    // props.navigation.navigate('DeckDetail', { deck })
  }

  return (
    <FlatList
      style={styles.container}
      data={Object.values(deckList)}
      renderItem={({ item }) => <DeckCard deck={item} navigateToDeck={navigateToDeck} />}
    />
  )
}

export default DeckList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgrey,
    padding: 30
  }
})
