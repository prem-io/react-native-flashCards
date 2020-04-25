import { AsyncStorage } from 'react-native'

const STORAGE_DB_KEY = 'UdaciFlashcards:8ba790f3-5acd-4a08-bc6a-97a36c124f29'

const initialData = {
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
  }
}

// helper function to fetch all decks
export function getDecks() {
  return AsyncStorage.getItem(STORAGE_DB_KEY)
    .then(result => {
      if (result !== null) {
        return JSON.parse(result)
      } else {
        AsyncStorage.setItem(STORAGE_DB_KEY, JSON.stringify(initialData))
        return initialData
      }
    })
    .catch(err => console.log(err))
}

// helper function to get a single deck data
export function getDeck(title) {
  return getDecks()
    .then((decks) => decks[title])
}

// helper function to save new deck
export function saveDeckTitle(title) {
  const deckObj = { title, questions: [] }
  return AsyncStorage.mergeItem(STORAGE_DB_KEY, JSON.stringify({
    [title]: deckObj
  }))
}

// helper function to add a new card
export function addCardToDeck(title, card) {
  return getDecks()
    .then((decks) => {
      decks[title].questions.push(card)
      AsyncStorage.mergeItem(STORAGE_DB_KEY, JSON.stringify(decks))
    })
}