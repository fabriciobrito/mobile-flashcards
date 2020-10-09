import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }
  onChangeQuestion(text) {
    this.setState(()=>{question: text})
  }
  onChangeAnswer(text) {
    this.setState(()=>{answer: text})
  }
  render() {
    const { navigation } = this.props;
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Enter the Card Question</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.onChangeQuestion(text)}
          placeholder='Question'
          value={this.state.question}
        />
        <Text>Enter the Card Answer</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.onChangeAnswer(text)}
          placeholder='Answer'
          value={this.state.answer}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('DeckView', {title: this.state.deckName})}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}