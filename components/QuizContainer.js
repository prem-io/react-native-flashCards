import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import * as colors from '../utils/colors'
import QuizCard from './QuizCard'
import Button from './Button'
import NoCards from './NoCards'
import Results from './Results'
import { getDeck } from '../utils/api'
import { setLocalNotification, clearLocalNotification } from '../utils/helper'

export default class QuizContainer extends Component {
  state = {
    questions: [],
    totalQuestions: 0,
    currentQuestion: 0,
    correctAnswers: 0,
    showResults: false,
    loader: true
  }

  componentDidMount() {
    const { title } = this.props.route.params
    getDeck(title)
      .then(res => {
        this.setState({
          questions: res.questions,
          totalQuestions: res.questions.length,
          loader: false
        })
      })
  }

  markAnswer = (answer) => {
    const { totalQuestions, currentQuestion } = this.state
    if (answer === 'correct') {
      this.setState((prevState) => ({
        correctAnswers: prevState.correctAnswers + 1,
      }))
    }
    if (currentQuestion === totalQuestions - 1) {
      this.setState({ showResults: true })
      clearLocalNotification()
        .then(setLocalNotification)
    } else {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
      }))
    }
  }

  restartQuiz = () => {
    this.setState({
      currentQuestion: 0,
      correctAnswers: 0,
      showResults: false
    })

    clearLocalNotification()
      .then(setLocalNotification)
  }

  goBack = () => this.props.navigation.goBack();

  render() {
    const { loader, questions, currentQuestion, totalQuestions, correctAnswers, showResults } = this.state
    const quiz = questions[currentQuestion]

    if (loader) {
      return <ActivityIndicator style={{ flex: 1 }} />
    }

    if (totalQuestions === 0) {
      return <NoCards goBack={this.goBack} noCards={false} />
    }

    if (showResults) {
      return <Results goBack={this.goBack} restart={this.restartQuiz} totalAnswered={totalQuestions} correctAnswers={correctAnswers} />
    }

    return (
      <View style={styles.container}>
        <View style={styles.quizProgress}>
          <Text style={styles.progressCount}>Cards: {currentQuestion + 1}/{totalQuestions}</Text>
        </View>
        <QuizCard quiz={quiz} />
        <Button
          style={{ width: 200, backgroundColor: colors.green }}
          onPress={() => this.markAnswer('correct')}>
          <Text>Correct</Text>
        </Button>
        <Button
          style={{ width: 200, backgroundColor: colors.red }}
          onPress={() => this.markAnswer('incorrect')}>
          <Text>Incorrect</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: colors.bg,
    alignItems: 'center'
  },
  quizProgress: {
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 5,
    marginBottom: 20,
    shadowRadius: 3,
    shadowOpacity: 0.95,
    elevation: 25,
    shadowColor: 'rgba(16, 14, 23, .25)',
    shadowOffset: { width: 0, height: 3 }
  },
  progressCount: {
    fontSize: 16,
    color: colors.grey,
    fontWeight: 'bold'
  }
})
