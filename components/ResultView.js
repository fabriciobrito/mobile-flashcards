import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NavButton from './NavButton';

export default class ResultView extends Component {
  componentDidMount() {
    const { navigation, route } = this.props;
    const { title } = route.params;
    navigation.setOptions({headerTitle: `${title} Quiz Results`})
  }
  render() {
    const { navigation, route } = this.props;
    const { answered, correct, total } = route.params;
    return(
      <View style={styles.container}>

        <View style={styles.result}>
          <Text style={styles.number}>
            {answered
              ? Math.round((correct/answered)*100)
              : 0}%
          </Text>
          <Text style={styles.description}>
            Correct Answers
          </Text>
          <Text style={styles.description}>
            {`${correct} out of ${answered}`}
          </Text>
        </View>

        <View style={styles.result}>
          <Text style={styles.number}>
            {Math.round((answered/total)*100)}%
          </Text>
          <Text style={styles.description}>
            Cards from Deck Answered
          </Text>
          <Text style={styles.description}>
            {`${answered} out of ${total}`}
          </Text>
        </View>

        <NavButton
          backgroundColor={'royalblue'}
          color={'white'}
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