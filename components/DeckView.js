import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DeckView extends Component {
  render() {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Deck View</Text>
      </View>
    )
  }
}