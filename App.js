import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import DeckView from './components/DeckView';

const HomeStack = createStackNavigator();
const AddDeckStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={DeckList}
        options={{
          headerTitle:'Flash Cards'
        }} />
      <HomeStack.Screen name="DeckView" component={DeckView}
        options={{
          headerTitle:'Deck View'
        }} />
    </HomeStack.Navigator>
  )
}

function CreateDeck() {
  return(
    <AddDeckStack.Navigator>
      <AddDeckStack.Screen name="Add Deck" component={AddDeck}
        options={{
          headerTitle:'Add Deck'
        }} />
    </AddDeckStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Decks" component={Home} />
        <Tab.Screen name="Add Deck" component={CreateDeck} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}