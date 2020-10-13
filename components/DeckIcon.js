import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated }
  from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export default class DeckIcon extends Component {
  state={
    size: new Animated.Value(120),
    opacity: new Animated.Value(1)
  }
  animateAndNavigate = () => {
    const { deck, navigation } = this.props;
    Animated.parallel([
      Animated.timing(this.state.size, {duration: 300, toValue: 200, useNativeDriver: false}),
      Animated.timing(this.state.opacity, {duration: 300, toValue: 0, useNativeDriver: false}),
    ]).start(
      () => {
        navigation.navigate('DeckView', {deck: deck})
        setTimeout(() => {
          this.state.size.setValue(120);
          this.state.opacity.setValue(1);
        }, 500)
      }
    )
  }
  render() {
    const { deck, cards } = this.props;
    return(
      <Animated.View style={styles.item}>
        <TouchableOpacity
          onPress={this.animateAndNavigate}>
          <AnimatedIcon
            style={[styles.icon,{fontSize: this.state.size, opacity: this.state.opacity}]}
            name='cards'
            //size={this.state.size}
            color='royalblue' />
          <Text style={styles.deck}>{deck}</Text>
          <Text style={styles.cards}>{`${cards} Card${cards>1?'s':''}`}</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 25,
    alignItems: 'center'
  },
  icon: {
    alignSelf: 'center'
  },
  deck: {
    alignSelf: 'center',
    fontSize: 30
  },
  cards: {
    alignSelf: 'center'
  }
})