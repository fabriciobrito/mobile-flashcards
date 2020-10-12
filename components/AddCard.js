import React, { Component } from 'react';
import { connect } from 'react-redux';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native';
import { addCard } from '../actions';

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }
  onChangeQuestion(text) {
    this.setState(()=>({question: text}))
  }
  onChangeAnswer(text) {
    this.setState(()=>({answer: text}))
  }
  onSubmit = () => {
    const { dispatch, route } = this.props;
    const { name } = route.params;
    dispatch(addCard({deck: name, card: this.state}))

    const { navigation } = this.props;
    navigation.navigate('DeckView', {title: this.state.deckName})
  }
  render() {
    const { answer, question } = this.state;
    return(
      <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Enter the Card Question</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.onChangeQuestion(text)}
          placeholder='Question'
          value={question}
          maxLength={100}
          multiline={true}
          autoFocus={true}
        />
        <Text>Enter the Card Answer</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.onChangeAnswer(text)}
          placeholder='Answer'
          value={answer}
          multiline={true}
          maxLength={100}
        />
        <TouchableOpacity
          onPress={this.onSubmit}
          disabled={answer === '' || question === ''}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(AddCard)