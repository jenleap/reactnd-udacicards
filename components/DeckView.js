import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class DeckView extends React.Component {
  render() {
    return (
      <View>
        <Text>Deck</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('newquestion')}>
            <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('quiz')}>
            <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}