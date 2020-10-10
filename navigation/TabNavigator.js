import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './HomeStack';
import CreateDeck from './AddDeckStack';

const Tab = createBottomTabNavigator();

export default function Main() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Decks" component={Home} />
        <Tab.Screen name="Add Deck" component={CreateDeck} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}