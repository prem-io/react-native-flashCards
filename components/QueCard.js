import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as colors from '../utils/colors'
import { ribColor } from '../utils/helper'

const QueCard = ({ que: { question } }) => {
  return (
    <View style={styles.card}>
      <View style={[styles.ribbon, { backgroundColor: ribColor() }]}></View>
      <Text style={styles.question} numberOfLines={2}>{question}</Text>
    </View>
  )
}

export default QueCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 40,
    marginBottom: 20,
    shadowRadius: 3,
    shadowOpacity: 0.95,
    elevation: 25,
    shadowColor: 'rgba(16, 14, 23, .25)',
    shadowOffset: { width: 0, height: 3 }
  },
  ribbon: {
    width: 5,
    height: 15,
    position: 'absolute',
    top: 15,
    left: 0
  },
  question: {
    fontSize: 18
  }
})
