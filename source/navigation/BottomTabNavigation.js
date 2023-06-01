import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Mine from '../screens/Mine'
import Wealth from '../screens/Wealth'
import Credit from '../screens/Credit'
import Insurance from '../screens/Insurance'
import Life from '../screens/Life'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Iconic from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../helper/helper'

const BottomTabNavigation = () => {
    const Bottom = createBottomTabNavigator()
    return (
        <Bottom.Navigator  
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
            //   height: 90,
            //   paddingHorizontal: 5,
              paddingTop: 0,
              backgroundColor: 'rgba(34,36,40,1)',
            //   position: 'absolute',
            //   borderTopWidth: 0,
          },
        })}
        >
            <Bottom.Screen
                name='Mine'
                component={Mine}
                options={{
                    tabBarLabel:({focused,color, size  })=>{
                        return <Text style={{color:focused ? Colors.lightGolden :Colors.grayColor,fontSize:11 }}>Mine</Text>
                    },
                    tabBarIcon: ({ focused,color, size }) => {
                        return <AntDesign name='meho' size={20}  color={focused ? Colors.lightGolden :Colors.grayColor }/>
                    }
                }}

            />
            <Bottom.Screen
                name='Wealth'
                component={Wealth}
                options={{
                    tabBarLabel:({focused,color, size  })=>{
                        return <Text style={{color:focused ? Colors.lightGolden :Colors.grayColor,fontSize:11 }} >Wealth</Text>
                    },
                    tabBarIcon: ({focused,color, size  }) => {
                        return <View style={{transform:[{rotate:'-90deg'}]}}>
                            <AntDesign name='wallet' size={20} color={focused ? Colors.lightGolden :Colors.grayColor } />
                        </View>
                    }
                }}
            />
            <Bottom.Screen
                name='Credit'
                component={Credit}
                options={{
                    tabBarLabel:({focused,color, size  })=>{
                        return <Text style={{color:focused ? Colors.lightGolden :Colors.grayColor,fontSize:11 }} >Credit</Text>
                    },
                    tabBarIcon: ({focused,color, size }) => {
                        return <AntDesign name='creditcard' size={20} color={focused ? Colors.lightGolden :Colors.grayColor }/>
                    }
                }}
            />
            <Bottom.Screen
                name='Insurance'
                component={Insurance}
                options={{
                    tabBarLabel:({focused,color, size  })=>{
                        return <Text style={{color:focused ? Colors.lightGolden :Colors.grayColor,fontSize:11 }} >Insurance</Text>
                    },
                    tabBarIcon: ({focused,color, size }) => {
                        return <Iconic name='md-shield-checkmark' size={20} color={focused ? Colors.lightGolden :Colors.grayColor }/>
                    }
                }}
            />
            <Bottom.Screen
                name='Life'
                component={Life}
                options={{
                    tabBarLabel:({focused,color, size  })=>{
                        return <Text style={{color:focused ? Colors.lightGolden :Colors.grayColor,fontSize:11 }} >Life</Text>
                    },
                    tabBarIcon: ({ focused,color, size }) => {
                        return <MaterialCommunityIcons name='shopping' size={20} color={focused ? Colors.lightGolden :Colors.grayColor }/>
                    }
                }}
            />
        </Bottom.Navigator>
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})