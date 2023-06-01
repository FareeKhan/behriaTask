import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTabNavigation from './source/navigation/BottomTabNavigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})