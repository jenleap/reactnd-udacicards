import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class DeckView extends React.Component {

  render() {
    return (
      <View>
        <Text>{this.props.deck.title}</Text>
        <Text>{this.props.deck.questions.length} cards</Text>
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

const mapStateToProps = (state) => {
  return {
    deck: state.selectedDeck
  };
};

export default connect(mapStateToProps) (DeckView);