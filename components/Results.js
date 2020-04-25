import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import * as colors from '../utils/colors'
import Button from './Button'

const Results = () => {
  return (
    <View style={styles.container}>
      <Image style={{ width: 300, height: 300 }} source={require('../assets/resultCard.jpeg')} />
      <Text style={styles.text}>You've completed the Quiz.</Text>
      <View style={styles.result}>
        <Text style={{ fontSize: 16 }}>Total Questions answered</Text>
        <Text style={{ fontSize: 16 }}>{5}</Text>
      </View>
      <View style={styles.result}>
        <Text style={{ fontSize: 16 }}>Correct Answers</Text>
        <Text style={{ fontSize: 16 }}>{4}</Text>
      </View>
      <Button style={{ backgroundColor: colors.white, color: colors.grey, marginVertical: 40 }} onPress={() => console.log('Back to Deck')}>Back</Button>
    </View >
  )
}

export default Results

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    color: colors.grey,
    textAlign: 'center',
    lineHeight: 30,
    fontWeight: 'bold',
    marginVertical: 30
  },
  result: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  }
})
