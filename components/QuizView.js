import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class QuizView extends Component {
  render() {
    const { navigation } = this.props
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Card 1 out of 10</Text>
        <View>
          <Text>Question...</Text>
        </View>
        <TouchableOpacity>
          <Text>View Answer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ResultView')}>
          <Text>Finish Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}