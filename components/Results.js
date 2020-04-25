import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import * as colors from '../utils/colors'
import Button from './Button'

const Results = ({ totalAnswered, correctAnswers, restart, goBack }) => {
  return (
    <View style={styles.container}>
      <Image style={{ width: 270, height: 270, alignSelf: 'center' }} source={require('../assets/resultCard.jpeg')} />
      <Text style={styles.text}>You've completed the Quiz.</Text>
      <View style={styles.result}>
        <Text style={{ fontSize: 16 }}>Total Questions answered :</Text>
        <Text style={{ fontSize: 16 }}>{totalAnswered}</Text>
      </View>
      <View style={styles.result}>
        <Text style={{ fontSize: 16 }}>Correct Answers :</Text>
        <Text style={{ fontSize: 16 }}>{correctAnswers}</Text>
      </View>
      <View style={{ width: 200, marginTop: 20, alignSelf: 'center' }}>
        <Button onPress={restart}>Restart</Button>
        <Button
          style={{ width: 200, backgroundColor: colors.white, color: colors.grey, alignSelf: 'center' }}
          onPress={goBack}
        >
          <Text>Back</Text>
        </Button>
      </View>
    </View >
  )
}

export default Results

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white
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
    marginVertical: 10,
    marginHorizontal: 40
  }
})
