import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as colors from '../utils/colors'

const Button = ({ children, disable, onPress, style = {} }) => {
  return (
    <TouchableOpacity disabled={disable} onPress={onPress}>
      <Text style={[styles.button, { backgroundColor: disable ? colors.disable : colors.blue }, style]}>{children}</Text>
    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    margin: 10,
    color: colors.lightgrey,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16
  }
})

export default Button