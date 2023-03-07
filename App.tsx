import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Root from './src/navigation/screens/Root'

const App = () => {
  return (
    <NavigationContainer>
      <Root/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})