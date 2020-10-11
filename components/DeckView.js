import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { deleteCard } from '../actions'

class DeckView extends Component {
  state = {
    questionIndex: 0
  }
  nextQuestion(direction) {
    const { deck } = this.props;
    const questions = deck
      ? deck.questions.length
      : 0;
    this.setState((prevState) => ({
      questionIndex:
        Math.max(Math.min(prevState.questionIndex + direction, questions-1), 0)
    }))
  }
  onDeleteCard = () => {
    const { dispatch, deck } = this.props;
    dispatch(deleteCard({deck: deck.title, card:this.state.questionIndex}))
    this.nextQuestion(0);//clamp index
  }
  render() {
    const { navigation, deck } = this.props;
    const { questions, title } = deck;
    console.log(questions, this.state.questionIndex);
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{deck.questions.length} Cards</Text>
        <View>
          <TouchableOpacity
            onPress={() => this.nextQuestion(-1)}
            disabled={this.state.questionIndex <= 0}>
            <Text>{'<'}</Text>
          </TouchableOpacity>
          <Text>
            {questions.length > 0
              ? questions[this.state.questionIndex].question
              : 'No card created yet.'}
          </Text>
          <TouchableOpacity
            onPress={() => this.nextQuestion(1)}
            disabled={this.state.questionIndex >= questions.length -1}>
            <Text>{'>'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddCard', {deck: title})}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onDeleteCard}>
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

function mapStateToProps(state, { route }) {
  const { params } = route;
  const deck = state[params.deck];
  return {
    deck
  }
}

export default connect(mapStateToProps)(DeckView);