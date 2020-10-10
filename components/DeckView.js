import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class DeckView extends Component {
  nextQuestion(direction) {

  }
  render() {
    const { navigation, route } = this.props;
    const { deck } = route.params;
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
        <TouchableOpacity onPress={() => navigation.navigate('AddCard', {deck: deck})}>
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

export default connect()(DeckView);