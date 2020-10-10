import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DeckIcon(props) {
  const { deck } = props;
  const navigation = useNavigation();
  return(
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('DeckView', {deck: deck})}>
        <MaterialCommunityIcons name="cards" size={72} color="black" />
        <Text>{deck}</Text>
      </TouchableOpacity>
    </View>
  )
}