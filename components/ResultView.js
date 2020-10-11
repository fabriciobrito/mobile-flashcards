import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ResultView extends Component {
  render() {
    const { navigation, route } = this.props;
    const { answered, correct, total } = route.params;
    console.log(this.props)
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Text>{(correct/answered)*100}%</Text>
          <Text>Correct</Text>
          <Text>Answers</Text>
        </View>
        <View>
          <Text>{(answered/total)*100}% of</Text>
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