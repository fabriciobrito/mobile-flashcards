import React, { Component } from 'react';
import { connect } from 'react-redux';
import { KeyboardAvoidingView, Text, TextInput, StyleSheet }
  from 'react-native';
import { addCard } from '../actions';
import NavButton from './NavButton';

class AddCard extends Component {
  componentDidMount(){
    const { navigation, name } = this.props;
    navigation.setOptions({headerTitle: `Add Card to ${name}`})
  }
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
    const { dispatch, name } = this.props;
    dispatch(addCard({deck: name, card: this.state}))

    const { navigation } = this.props;
    navigation.navigate('DeckView', {title: this.state.deckName})
  }
  render() {
    const { answer, question } = this.state;
    return(
      <KeyboardAvoidingView style={styles.container}>
        <Text>Enter the Card Question</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.onChangeQuestion(text)}
          placeholder='Question'
          value={question}
          maxLength={100}
          multiline={true}
          autoFocus={true}
        />
        <Text>Enter the Card Answer</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.onChangeAnswer(text)}
          placeholder='Answer'
          value={answer}
          multiline={true}
          maxLength={100}
        />
        <NavButton
          onPress={this.onSubmit}
          disabled={answer === '' || question === ''}
          text='Submit'
        />
      </KeyboardAvoidingView>
    )
  }
}

function mapStateToProps(_, { route }) {
  const { name } = route.params;
  return {
    name
  }
}

export default connect(mapStateToProps)(AddCard)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    alignSelf: 'stretch',
    marginHorizontal: 40,
    marginVertical:20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
})