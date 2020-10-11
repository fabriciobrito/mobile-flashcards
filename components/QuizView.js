import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

class QuizView extends Component {
  componentDidMount() {
    const { deck } = this.props;
    this.setState(() => ({
      remainingQuestions: [...deck.questions],
      drawnIndex: Math.floor(Math.random() * deck.questions.length)
    }))
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
        correctAnswers: prevState.correctAnswers + correct? 1 : 0,
        answered: prevState.answered + 1,
        showAnswer: false,
      }))
    }
  }
  revealAnswer= () => {
    this.setState(() => ({showAnswer: true}))
  }
  handleFinishQuiz(correct) {
    console.log(correct)
    const { navigation, deck } = this.props;
    const { answered, correctAnswers } = this.state;
    navigation.navigate('ResultView', {
      answered: answered + (correct !== undefined? 1 : 0),
      correct: correctAnswers + correct? 1 : 0,
      total: deck.questions.length
    })
  }
  render() {
    const { deck } = this.props;
    const { answered, showAnswer, drawnIndex, remainingQuestions } = this.state
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {drawnIndex === undefined
        ? <ActivityIndicator style={{marginTop: 30}} />
        : <View>
            <Text>Card {answered + 1} out of {deck.questions.length}</Text>
            <View>
              <Text>{remainingQuestions[drawnIndex].question}</Text>
              {showAnswer && (
                <Text>{remainingQuestions[drawnIndex].answer}</Text>
              )}
            </View>
            {showAnswer
              ? <View>
                  <TouchableOpacity onPress={() => this.drawNextQuestion(true)}>
                    <Text>Correct</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.drawNextQuestion(false)}>
                    <Text>Incorrect</Text>
                  </TouchableOpacity>
                </View>
              : <TouchableOpacity onPress={this.revealAnswer}>
                  <Text>View Answer</Text>
                </TouchableOpacity>
            }
            <TouchableOpacity onPress={() => this.handleFinishQuiz()}>
              <Text>Finish Quiz</Text>
            </TouchableOpacity>
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