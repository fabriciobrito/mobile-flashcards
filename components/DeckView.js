import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { deleteCard, deleteDeck } from '../actions';
import NavButton from './NavButton';

class DeckView extends Component {
  componentDidMount(){
    const { navigation, deck } = this.props;
    navigation.setOptions({headerTitle: deck.title})
  }
  state = {
    questionIndex: 0,
    showAnswer: false
  }
  nextQuestion(direction) {
    const { deck } = this.props;
    const questions = deck !== undefined
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
          <Text style={styles.headerTxt}>{questions? questions.length : 0} Cards</Text>
          <Text style={styles.tip}>Tap card to turn</Text>
        </View>

        <View style={styles.main}>

          <TouchableOpacity
            style={styles.nav}
            onPress={() => this.nextQuestion(-1)}
            disabled={questionIndex <= 0}>
            <MaterialIcons
              name='navigate-before'
              size={72}
              color={questionIndex <= 0 ? 'lightgrey' : 'black'}/>
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
            <MaterialIcons
              name='navigate-next'
              size={72}
              color={questionIndex >= questions.length -1?'lightgrey':'black'} />
          </TouchableOpacity>

        </View>

        <View style={styles.buttons}>

          <NavButton
            color={'white'}
            backgroundColor={'royalblue'}
            onPress={() => navigation.navigate('QuizView', {name: title})}
            disabled={questions.length === 0}
            text={'Start Quiz'} />

          <NavButton
            color={'white'}
            backgroundColor={'royalblue'}
            onPress={() => navigation.navigate('AddCard', {name: title})}
            text={'Add Card'}
          />

          <NavButton
            color={'orangered'}
            onPress={this.onDeleteCard}
            disabled={questions.length === 0}
            text={'Delete Card'}
          />

          <NavButton
            color={'orangered'}
            onPress={this.onDeleteDeck}
            text={'Delete Deck'}
          />

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
    flex: 1,
    alignSelf: 'center'
  },
  tip: {
    alignSelf: 'flex-end'
  },
  headerTxt: {
    fontSize: 32
  },
  main: {
    flex: 5,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    flex:4
  },
  nav: {
    flex: 1,
    justifyContent: 'center'
  },
  cardTxt:{
    flex: 1,
    fontSize: 24,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginVertical: 20
  },
  buttons: {
    flex: 6,
    alignSelf: 'center'
  }
})