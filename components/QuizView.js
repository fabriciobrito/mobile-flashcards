import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, StatusBar }
  from 'react-native';
import { connect } from 'react-redux';
import NavButton from './NavButton';

class QuizView extends Component {
  componentDidMount() {
    const { navigation, deck } = this.props;
    navigation.setOptions({headerTitle: `Quiz: ${deck.title}`})
    this.setState(() => ({
      remainingQuestions: [...deck.questions],
      drawnIndex: Math.floor(Math.random() * deck.questions.length)
    }))
    navigation.addListener('focus', () => {
      this.setState(() => ({
        remainingQuestions: [...deck.questions],
        drawnIndex: Math.floor(Math.random() * deck.questions.length),
        showAnswer: false,
        answered: 0,
        correctAnswers: 0
      }))
    });
  }
  state = {
    showAnswer: false,
    answered: 0,
    correctAnswers: 0
  }
  drawNextQuestion(correct) {
    let { remainingQuestions, drawnIndex } = this.state;
    if(remainingQuestions.length <= 1)
      this.handleFinishQuiz(correct)
    else {
      remainingQuestions.splice(drawnIndex, 1)
      this.setState((prevState) => ({
        remainingQuestions,
        drawnIndex: Math.floor(Math.random() * remainingQuestions.length),
        correctAnswers: prevState.correctAnswers + (correct? 1 : 0),
        answered: prevState.answered + 1,
        showAnswer: false,
      }))
    }
  }
  revealAnswer= () => {
    this.setState(() => ({showAnswer: true}))
  }
  handleFinishQuiz(correct) {
    const { navigation, deck } = this.props;
    const { answered, correctAnswers } = this.state;
    navigation.navigate('ResultView', {
      title: deck.title,
      answered: answered + (correct !== undefined? 1 : 0),
      correct: correctAnswers + (correct? 1 : 0),
      total: deck.questions.length
    })
  }
  render() {
    const { deck } = this.props;
    const { answered, showAnswer, drawnIndex, remainingQuestions } = this.state
    return(
      <View style={styles.container}>
      {drawnIndex === undefined
        ? <ActivityIndicator style={{marginTop: 30}} />
        : <View style={styles.main}>

            <View style={styles.header}>
              <Text style={styles.headerTxt}>Card {answered + 1} out of {deck.questions.length}</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTxt}>
                {remainingQuestions[drawnIndex].question}
              </Text>
              {showAnswer && (
                <Text style={[styles.cardTxt, {borderTopWidth: 1}]}>
                  {remainingQuestions[drawnIndex].answer}
                </Text>
              )}
            </View>

            <View style={styles.answerBts}>
              {showAnswer
                ? <View>
                    <NavButton
                      backgroundColor='forestgreen'
                      color={'white'}
                      onPress={() => this.drawNextQuestion(true)}
                      text={'Correct'}/>
                    <NavButton
                      backgroundColor='orangered'
                      color={'white'}
                      onPress={() => this.drawNextQuestion(false)}
                      text={'Incorrect'}/>
                  </View>
                : <NavButton
                    backgroundColor={'royalblue'}
                    color={'white'}
                    onPress={this.revealAnswer}
                    text={'View Answer'}/>
              }
            </View>
            <NavButton
              color={'orangered'}
              style={styles.finishBtn}
              onPress={() => this.handleFinishQuiz()}
              text={'Finish Quiz'} />
          </View>
      }
      </View>
    )
  }
}

function mapStateToProps(state, { route }) {
  const { params } = route;
  const deck = state[params.name];
  return {
    deck
  }
}

export default connect(mapStateToProps)(QuizView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  main: {
    flex: 1,
    alignItems: 'stretch',
  },
  header:{
    flex: 1,
    flexDirection:'column',
    alignItems: 'flex-end'
  },
  headerTxt:{
    marginRight: 20
  },
  card:{
    flex:5,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginVertical: 50,
    marginHorizontal: 50
  },
  cardTxt:{
    fontSize: 18,
    alignSelf: 'stretch',
    paddingVertical: 10
  },
  answerBts: {
    flex: 4
  },
  finishBtn: {
    flex: 1
  }
})