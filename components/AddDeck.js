import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { storeData } from '../utils/api';
import { addDeck } from '../actions'

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Enter the Deck Name</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.onChangeText(text)}
          placeholder='Deck Name'
          value={deckName}
          maxLength={25}
          autoFocus={true}
        />
        <TouchableOpacity
          onPress={this.addDeck}
          disabled={deckName === ''}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(AddDeck);