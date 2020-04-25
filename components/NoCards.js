import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import * as colors from '../utils/colors'
import Button from './Button'

const NoCards = ({ goBack }) => {
  return (
    <View style={styles.container}>
      <Image style={{ width: 300, height: 300 }} source={require('../assets/noCard.jpeg')} />
      <Text style={styles.text}>Sorry, you cannot take a quiz because there are no cards in the deck.</Text>
      <Button style={{ backgroundColor: colors.white, color: colors.grey }} onPress={goBack}>Back</Button>
    </View>
  )
}

export default NoCards

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: colors.white
  },
  text: {
    fontSize: 18,
    color: colors.grey,
    textAlign: 'center',
    lineHeight: 30,
    fontWeight: 'bold'
  }
})
