import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import * as colors from '../utils/colors'
import Button from './Button'
import { saveDeckTitle } from '../utils/api'

export default class CreateDeck extends Component {
  state = {
    title: ''
  }

  handleChangeText = (title) => {
    this.setState({ title })
  }

  handleSubmit = () => {
    const { title } = this.state
    saveDeckTitle(title)
    this.props.navigation.navigate('QueList', {
      deck: {
        title: this.state.title,
      }
    })
    this.setState({ title: '' })
  }

  render() {
    const { title } = this.state
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.card}>
            <TextInput
              value={title}
              style={styles.input}
              onChangeText={this.handleChangeText}
              placeholder="Deck Title"
              placeholderTextColor={colors.grey}
              maxLength={15}
            />
            <Text style={styles.charCount}>{title.length}/15</Text>
            <Button disable={title.length > 0 ? false : true} onPress={this.handleSubmit}>Create</Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 30,
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
  input: {
    width: '100%',
    height: 45,
    padding: 5,
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: colors.blue
  },
  charCount: {
    fontSize: 12,
    color: colors.grey,
    alignSelf: "flex-end",
    marginTop: 5,
    marginBottom: 10,
  }
})
