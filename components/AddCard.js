import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
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
          onPress={this.onSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(AddCard)