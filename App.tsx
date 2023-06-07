import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTabNavigation from './source/navigation/BottomTabNavigation'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './source/navigation/StackNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})