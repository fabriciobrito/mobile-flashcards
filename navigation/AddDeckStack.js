import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddDeck from '../components/AddDeck';

const AddDeckStack = createStackNavigator();

export default function CreateDeck() {
  return(
    <AddDeckStack.Navigator>
      <AddDeckStack.Screen name="Add Deck" component={AddDeck}
        options={{
          headerTitle:'Add Deck'
        }} />
    </AddDeckStack.Navigator>
  )
}
