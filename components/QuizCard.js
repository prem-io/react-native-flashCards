import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as colors from '../utils/colors'
import Icon from 'react-native-vector-icons/AntDesign'
import FlipCard from 'react-native-flip-card'

export default class QuizCard extends Component {
  render() {
    const { quiz: { question, answer }, flip, flipCard } = this.props
    return (
      <FlipCard
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={flip}
        clickable={false}
      >
        {/* Face Side */}
        <View style={[styles.card]}>
          <Text style={{ alignSelf: 'center' }}>Question</Text>
          <Text style={styles.title} numberOfLines={7}>{question}</Text>
          <TouchableOpacity style={styles.icon} onPress={flipCard}>
            <Icon name="arrowright" size={25} color={colors.grey} />
          </TouchableOpacity>
        </View>
        {/* Back Side */}
        <View style={[styles.card]}>
          <Text style={{ alignSelf: 'center' }}>Answer</Text>
          <Text style={styles.title} numberOfLines={7}>{answer}</Text>
          <TouchableOpacity style={styles.icon} onPress={flipCard}>
            <Icon name="arrowright" size={25} color={colors.grey} />
          </TouchableOpacity>
        </View>
      </FlipCard>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: 25,
    borderRadius: 8,
    marginBottom: 20,
    shadowRadius: 3,
    shadowOpacity: 0.95,
    elevation: 25,
    shadowColor: 'rgba(16, 14, 23, .25)',
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  title: {
    fontSize: 22,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  icon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})