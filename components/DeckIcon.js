import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DeckIcon(props) {
  const { deck } = props;
  const navigation = useNavigation();
  return(
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DeckView', {deck: deck})}>
        <MaterialCommunityIcons style={styles.icon} name='cards' size={120} color='royalblue' />
        <Text style={styles.text}>{deck}</Text>
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
  text: {
    alignSelf: 'center',
    fontSize: 30
  }
})