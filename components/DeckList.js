import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class DeckList extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('deck')}>
            <Text>Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}