import React, { Component } from 'react';
import { View } from 'react-native';
import DeckIcon from './DeckIcon';

export default class DeckList extends Component {
  render() {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <DeckIcon title='Deck 1' />
        <DeckIcon title='Deck 2' />
      </View>
    )
  }
}