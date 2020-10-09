import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ResultView extends Component {
  render() {
    const { navigation } = this.props;
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Text>50%</Text>
          <Text>Correct</Text>
          <Text>Answers</Text>
        </View>
        <View>
          <Text>10% of</Text>
          <Text>Cards from Deck</Text>
          <Text>Answered</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('DeckView')}>
          <Text>OK</Text>
        </TouchableOpacity>
      </View>
    )
  }
}