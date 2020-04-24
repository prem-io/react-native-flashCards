import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import QueCard from './QueCard'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as colors from '../utils/colors'
import Button from './Button'

const QueList = () => {
  return (
    <View style={styles.container}>
      <QueCard />
      <QueCard />
      <QueCard />
      <Button style={{ width: 200 }} onPress={() => console.log('Start Quiz')}
      >Start Quiz</Button>
      <TouchableOpacity style={styles.floatBtn}>
        <Icon name="plus" size={25} color={colors.lightgrey} />
      </TouchableOpacity>
    </View>
  )
}

export default QueList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center'
  },
  floatBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 30,
    right: 30,
    height: 70,
    backgroundColor: colors.blue,
    borderRadius: 100,
  }
})
