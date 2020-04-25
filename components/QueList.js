import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import QueCard from './QueCard'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as colors from '../utils/colors'
import Button from './Button'

export default class QueList extends Component {

  updateScreenTitle = (title) => {
    this.props.navigation.setOptions({ title })
  }

  addCard = () => {
    const { deck } = this.props.route.params
    console.log(deck)
    // this.props.navigation.navigate('QueList', { deck })
  }

  navigate = (screen) => {
    const { deck: { questions } } = this.props.route.params
    this.props.navigation.navigate(screen, { questions })
  }

  render() {
    const { deck: { title, questions } } = this.props.route.params
    this.updateScreenTitle(title)

    return (
      <View style={styles.container}>
        <FlatList
          data={questions}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({ item }) => <QueCard que={item} />}
        />
        <Button
          style={{ width: 150, marginBottom: 15 }}
          onPress={() => this.navigate('Quiz')}
        >
          <Text>Start Quiz</Text>
        </Button>
        <TouchableOpacity
          style={styles.floatBtn}
          onPress={() => this.navigate('AddQue')}
        >
          <Icon name="plus" size={20} color={colors.lightgrey} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center'
  },
  floatBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 65,
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: colors.blue,
    borderRadius: 100,
  }
})
