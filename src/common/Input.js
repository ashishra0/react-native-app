import React from 'react';
import {TextInput, Text, View} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  const {viewStyle, textInputStyle, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={textInputStyle}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
       />
    </View>
  );
};

const styles = {
  viewStyle:{
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInputStyle:{
    color: '#000',
    fontWeight: 'bold',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  textStyle:{
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
    flex: 1
  }
}

export { Input };