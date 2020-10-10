import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class DeckView extends Component {
  nextQuestion(direction) {

  }
  render() {
    const { navigation } = this.props
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>10 Cards</Text>
        <View>
          <TouchableOpacity onPress={() => this.nextQuestion(-1)}>
            <Text>{'<'}</Text>
          </TouchableOpacity>
          <Text>Question...</Text>
          <TouchableOpacity onPress={() => this.nextQuestion(1)}>
            <Text>{'>'}</Text>
          </TouchableOpacity>
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