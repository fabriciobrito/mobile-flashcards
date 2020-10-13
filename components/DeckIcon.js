import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DeckIcon(props) {
  const { deck, cards } = props;
  const navigation = useNavigation();
  return(
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DeckView', {deck: deck})}>
        <MaterialCommunityIcons style={styles.icon} name='cards' size={120} color='royalblue' />
        <Text style={styles.deck}>{deck}</Text>
        <Text style={styles.cards}>{`${cards} Card${cards>1?'s':''}`}</Text>
      </TouchableOpacity>
    </View>
  )
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