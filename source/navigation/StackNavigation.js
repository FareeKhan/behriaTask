import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTabNavigation from './BottomTabNavigation'
import { createStackNavigator } from '@react-navigation/stack';

const StackNavigation = () => {
    const Stack = createStackNavigator()
  return (
     <Stack.Navigator>
         <Stack.Screen name='BottomNav' component={BottomTabNavigation}   />
     </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})