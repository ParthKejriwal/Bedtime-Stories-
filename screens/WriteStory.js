import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export default function WriteStory() {

  const [value, onChangeText] = React.useState('Multiline text\nline 2\nline3');
  return (
      <View style={styles.container}>
        <TextInput
            multiline
            numberOfLines={16}
            onChangeText={text => onChangeText(text)}
            value={value}
            editable
            maxLength={1000}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    height: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center'
  }
});