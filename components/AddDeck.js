import React, { Component } from 'react';
import { connect } from 'react-redux';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { storeData } from '../utils/api';
import { addDeck } from '../actions';
import NavButton from './NavButton';

class AddDeck extends Component {
  state = {
    deckName: ''
  }
  onChangeText(text) {
    this.setState(()=>({deckName: text}))
  }
  addDeck = () => {
    const deck = this.state.deckName;
    const entry = {name: deck};

    this.props.dispatch(addDeck(entry));

    //ToDo: Update Local Storage

    const { navigation } = this.props;
    navigation.navigate('DeckView', {deck: deck});

    this.setState(() => ({deckName:''}))
  }
  render() {
    const { deckName } = this.state;
    return(
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.header}>Enter the Deck Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.onChangeText(text)}
          placeholder='Deck Name'
          value={deckName}
          maxLength={25}
          autoFocus={true}
        />
        <NavButton
          onPress={this.addDeck}
          disabled={deckName === ''}
          text={'Submit'}/>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(AddDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginHorizontal: 20
  },
  header: {
    fontSize: 18
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 15
  }
})