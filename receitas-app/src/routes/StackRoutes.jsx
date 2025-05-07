import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import ReceitaScreen from '../screens/ReceitaScreen'

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ title: 'Receitas Deliciosas' }}
      />
      <Stack.Screen
        name='ReceitaScreen'
        component={ReceitaScreen}
        options={{ title: 'Detalhes da Receita' }}
      />
    </Stack.Navigator>
  )
}
