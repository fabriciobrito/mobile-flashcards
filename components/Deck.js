import React from 'react'
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Deck(props) {
  const { title } = props
  return(
    <View>
      <MaterialCommunityIcons name="cards" size={72} color="black" />
      <Text>{title}</Text>
    </View>
  )
}