import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import QueCard from './QueCard'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as colors from '../utils/colors'
import Button from './Button'
import { getDeck } from '../utils/api'
export default class QueList extends Component {
  state = {
    questions: []
  }

  componentDidMount() {
    const { deck: { title } } = this.props.route.params
    getDeck(title)
      .then(res => this.setState({ questions: res.questions }))
  }

  componentDidUpdate(prevProps) {
    const { deck: { title } } = this.props.route.params
    prevProps.navigation.addListener('focus', () => {
      getDeck(title)
        .then(res => this.setState({ questions: res.questions }))
    })
  }

  updateScreenTitle = (title) => {
    this.props.navigation.setOptions({ title })
  }

  navigate = (screen) => {
    const { deck: { title, questions } } = this.props.route.params
    this.props.navigation.navigate(screen, { title, questions })
  }

  render() {
    const { deck: { title } } = this.props.route.params
    const { questions } = this.state
    this.updateScreenTitle(title)

    return (
      <View style={styles.container}>
        <FlatList
          data={questions}
          keyExtractor={(_item, index) => 'key' + index}
          renderItem={({ item, index }) => <QueCard que={item} indx={index} />}
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
    alignItems: 'center',
    backgroundColor: colors.white
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
