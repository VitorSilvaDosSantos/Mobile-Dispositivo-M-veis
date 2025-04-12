import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'
import Escudo from './screen/EscudoScreen'
import Jogador from './screen/JogadorScreen'
import Titulo from './screen/TituloScreen'


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>


          <Tab.Screen
            name='Escudo'
            component={Escudo}
            options={{
              title: 'Escudo',
              tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
            }}
          />


          <Tab.Screen
            name='Jogador'
            component={Jogador}
            options={{
              title: 'Jogador',
              tabBarIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
            }}
          />


          <Tab.Screen
            name='Titulo'
            component={Titulo}
            options={{
              title: 'Titulo',
              tabBarIcon: ({ color, size }) => <Ionicons name='cog' color={color} size={size} />
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}