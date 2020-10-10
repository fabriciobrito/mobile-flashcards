import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { addDeck } from '../actions'

class AddDeck extends Component {
  state = {
    deckName: ''
  }
  onChangeText(text) {
    this.setState(()=>({deckName: text}))
  }
  addDeck = () => {
    this.props.dispatch(addDeck({name: this.state.deckName}));

    const { navigation } = this.props;
    navigation.navigate('DeckView', {title: this.state.deckName});
  }
  render() {
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
          onPress={this.addDeck}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(AddDeck);