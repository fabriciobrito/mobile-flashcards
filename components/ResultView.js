import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NavButton from './NavButton';

export default class ResultView extends Component {
  render() {
    const { navigation, route } = this.props;
    const { answered, correct, total } = route.params;
    return(
      <View style={styles.container}>

        <View style={styles.result}>
          <Text style={styles.number}>
            {Math.round((correct/answered)*100)}%
          </Text>
          <Text style={styles.description}>
            Correct Answers
          </Text>
        </View>

        <View style={styles.result}>
          <Text style={styles.number}>
            {Math.round((answered/total)*100)}%
          </Text>
          <Text style={styles.description}>
            Cards from Deck Answered
          </Text>
        </View>

        <NavButton
          onPress={() => navigation.navigate('DeckView')}
          text={'OK'}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'stretch'
  },
  result: {
    alignSelf: 'center'
  },
  number: {
    alignSelf: 'center',
    fontSize: 72
  },
  description: {
    alignSelf: 'center',
    fontSize: 18
  }
})