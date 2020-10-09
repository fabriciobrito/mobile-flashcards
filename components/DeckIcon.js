import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DeckIcon(props) {
  const { title } = props;
  const navigation = useNavigation();
  return(
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('DeckView')}>
        <MaterialCommunityIcons name="cards" size={72} color="black" />
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}