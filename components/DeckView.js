import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class DeckView extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18}}>{this.props.deck.title}</Text>
        {this.props.deck.questions ? (
            <Text style={styles.cardCount}>{this.props.deck.questions.length} cards</Text>
        ) : (
            <Text style={styles.cardCount}>0 cards</Text>
        )}
        <TouchableOpacity 
            style={styles.addButton}
            onPress={() => this.props.navigation.navigate('newquestion')}>
            <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.startButton}
            onPress={() => this.props.navigation.navigate('quiz')}>
            <Text style={{ color: "white" }}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardCount: {
        fontSize: 16,
        color: 'grey'
    },
    addButton: {
      margin: 10,
      padding: 10,
      borderWidth: 1,
      borderRadius: 4
    },
    startButton: {
      margin: 10,
      padding: 10,
      backgroundColor: "black",
      borderRadius: 4,
    }
});

const mapStateToProps = (state) => {
  return {
    deck: state.selectedDeck
  };
};

export default connect(mapStateToProps) (DeckView);