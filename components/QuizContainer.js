import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import * as colors from '../utils/colors'
import QuizCard from './QuizCard'
import Button from './Button'

export default class QuizContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.quizProgress}>
          <Text style={styles.progressCount}>Cards {1}/{5}</Text>
        </View>
        <QuizCard />
        <Button style={{ width: 200, backgroundColor: colors.green }} onPress={() => console.log('correct')}>Correct</Button>
        <Button style={{ width: 200, backgroundColor: colors.red }} onPress={() => console.log('in-correct')}>Incorrect</Button>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  quizProgress: {
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 2,
    marginBottom: 20
  },
  progressCount: {
    fontSize: 16,
    color: colors.grey,
    fontWeight: 'bold'
  }
})
