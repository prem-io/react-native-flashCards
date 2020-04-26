import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Keyboard, AsyncStorage } from 'react-native'
import Button from './Button'
import * as colors from '../utils/colors'
import { addCardToDeck, getDecks } from '../utils/api'

export default class AddQue extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleChangeText = (name, text) => {
    this.setState({ [name]: text })
  }

  handleSubmit = () => {
    const { question, answer } = this.state
    const { title } = this.props.route.params
    const card = { question, answer }
    addCardToDeck(title, card)
      .then(_res => {
        this.setState({ question: '', answer: '' }) // reset the state
        this.props.navigation.navigate('QueList')
      })
  }

  render() {
    const { question, answer } = this.state
    const disable = (question.length > 0 && answer.length > 0)
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <TextInput
            value={question}
            style={styles.input}
            onChangeText={(text) => this.handleChangeText('question', text)}
            placeholder="Enter Question"
            placeholderTextColor={colors.disable}
          />
          <TextInput
            value={answer}
            style={styles.input}
            onChangeText={(text) => this.handleChangeText('answer', text)}
            placeholder="Enter Answer"
            placeholderTextColor={colors.disable}
          />
          <Button
            onPress={this.handleSubmit}
            disable={disable ? false : true}
            style={styles.btn}
          >Create Card</Button>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  input: {
    width: '100%',
    height: 45,
    padding: 5,
    marginBottom: 15,
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: colors.blue
  },
  btn: {
    margin: 30
  }
})
