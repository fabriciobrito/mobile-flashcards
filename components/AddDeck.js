import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class AddDeck extends Component {
  state = {
    deckName: ''
  }
  onChangeText(text) {
    this.setState(()=>({deckName: text}))
  }
  render() {
    const { navigation } = this.props;
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Enter the Deck Name</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.onChangeText(text)}
          placeholder='Deck Name'
          value={this.state.deckName}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('DeckView', {title: this.state.deckName})}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}