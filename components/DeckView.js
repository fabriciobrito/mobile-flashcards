import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { deleteCard, deleteDeck } from '../actions';

class DeckView extends Component {
  state = {
    questionIndex: 0,
    showAnswer: false
  }
  nextQuestion(direction) {
    const { deck } = this.props;
    const questions = deck
      ? deck.questions.length
      : 0;
    this.setState((prevState) => ({
      questionIndex:
        Math.max(Math.min(prevState.questionIndex + direction, questions-1), 0),
      showAnswer: false
    }))
  }
  onDeleteCard = () => {
    const { dispatch, deck } = this.props;
    dispatch(deleteCard({deck: deck.title, card:this.state.questionIndex}))
    this.nextQuestion(0);//clamp index
  }
  onDeleteDeck = () => {
    const { dispatch, deck, navigation } = this.props;
    dispatch(deleteDeck({deck: deck.title}))
    navigation.navigate('Home')
  }
  toggleShowAnswer = () => {
    this.setState((prevState) => ({
      showAnswer: !prevState.showAnswer
    }))
  }
  render() {
    const { navigation, deck } = this.props;
    const { questions, title } = deck;
    const { questionIndex, showAnswer } = this.state;
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{deck.questions.length} Cards</Text>
        <View>
          <TouchableOpacity
            onPress={() => this.nextQuestion(-1)}
            disabled={questionIndex <= 0}>
            <Text>{'<'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleShowAnswer}>
            <Text>
              {questions.length > 0
                ? showAnswer
                  ? questions[questionIndex].answer
                  : questions[questionIndex].question
                : 'No card created yet.'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.nextQuestion(1)}
            disabled={questionIndex >= questions.length -1}>
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
        <TouchableOpacity onPress={this.onDeleteDeck}>
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