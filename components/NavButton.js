import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function NavButton(props) {
  const { onPress, text, disabled, backgroundColor, color } = props;
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: backgroundColor}]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[
        styles.buttonTxt,
        {color: disabled
          ? 'lightgrey'
          : color
            ? color
            : 'black'}
      ]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderColor: 'black',
    marginVertical: 10,
    alignSelf: 'center',
    height: 45,
    width: 200,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10
  },
  buttonTxt: {
    alignSelf: 'center'
  }
});