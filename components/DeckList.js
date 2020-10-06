import React, { Component } from 'react';
import { View } from 'react-native';
import Deck from './Deck';

export default class DeckList extends Component {
  render() {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Deck title='Deck 1' />
        <Deck title='Deck 2' />
      </View>
    )
  }
}