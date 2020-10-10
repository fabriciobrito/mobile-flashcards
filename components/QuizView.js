import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class QuizView extends Component {
  state = {
    showAnswer: false
  }
  revealAnswer() {
    this.setState(() => ({showAnswer: true}))
  }
  render() {
    const { navigation } = this.props
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Card 1 out of 10</Text>
        <View>
          <Text>Question...</Text>
          {this.state.showAnswer && (
            <Text>Answer...</Text>
          )}
        </View>
        {this.state.showAnswer
          ? <View>
              <TouchableOpacity>
                <Text>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Incorrect</Text>
              </TouchableOpacity>
            </View>
          : <TouchableOpacity onPress={() => this.revealAnswer()}>
              <Text>View Answer</Text>
            </TouchableOpacity>
        }
        <TouchableOpacity onPress={() => navigation.navigate('ResultView')}>
          <Text>Finish Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}