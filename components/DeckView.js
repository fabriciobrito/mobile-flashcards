import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class DeckView extends Component {
  render() {
    const { navigation } = this.props
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>10 Cards</Text>
        <View>
          <Text>{'<'}</Text>
          <Text>Question...</Text>
          <Text>{'>'}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AddCard')}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Delete Card</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('QuizView')}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}