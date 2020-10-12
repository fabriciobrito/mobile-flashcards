import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
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
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>{deck.questions.length} Cards</Text>
        </View>
        <View style={styles.main}>
          <TouchableOpacity
            style={styles.nav}
            onPress={() => this.nextQuestion(-1)}
            disabled={questionIndex <= 0}>
            <MaterialIcons name="navigate-before" size={72} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={this.toggleShowAnswer}>
            <Text style={styles.cardTxt}>
              {questions.length > 0
                ? showAnswer
                  ? questions[questionIndex].answer
                  : questions[questionIndex].question
                : 'No card created yet.'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nav}
            onPress={() => this.nextQuestion(1)}
            disabled={questionIndex >= questions.length -1}>
            <MaterialIcons name="navigate-next" size={72} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate('QuizView', {name: title})}
            disabled={questions.length === 0}>
            <Text style={styles.buttonTxt}>Start Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AddCard', {name: title})}>
            <Text style={styles.buttonTxt}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button]}
            onPress={this.onDeleteCard}>
            <Text style={styles.buttonTxt}>Delete Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button]}
            onPress={this.onDeleteDeck}>
            <Text style={styles.buttonTxt}>Delete Deck</Text>
          </TouchableOpacity>
        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  header: {
    alignSelf: 'center'
  },
  headerTxt: {
    fontSize: 32
  },
  main: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    flex:5
  },
  nav: {
    flex: 1
  },
  cardTxt:{
    fontSize: 24,
    borderWidth: 1,
    borderColor: 'black',
    minHeight: 150,
    padding: 10
  },
  buttons: {
    alignSelf: 'center'
  },
  button: {
    borderColor: 'black',
    marginVertical: 10,
    alignSelf: 'center',
    height: 30,
    width: 200,
    justifyContent: 'center',
    borderWidth: 1
  },
  buttonTxt: {
    alignSelf: 'center'
  }
})