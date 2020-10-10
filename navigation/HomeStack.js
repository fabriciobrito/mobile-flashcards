import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DeckList from '../components/DeckList';
import DeckView from '../components/DeckView';
import AddCard from '../components/AddCard';
import QuizView from '../components/QuizView';
import ResultView from '../components/ResultView';

const HomeStack = createStackNavigator();

export default function Home() {
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
        <HomeStack.Screen name="AddCard" component={AddCard}
        options={{
          headerTitle:'Add Card'
        }} />
        <HomeStack.Screen name="QuizView" component={QuizView}
        options={{
          headerTitle:'Quiz'
        }} />
        <HomeStack.Screen name="ResultView" component={ResultView}
        options={{
          headerTitle:'Result'
        }} />
    </HomeStack.Navigator>
  )
}