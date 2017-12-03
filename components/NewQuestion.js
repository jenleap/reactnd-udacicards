import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { saveDeck } from './../utils/api';
import { addDeck, selectDeck } from './../actions';
import { connect } from 'react-redux';

class NewQuestion extends React.Component {
    state = {
        newQuestion: 'Question',
        newAnswer: 'Answer'
    }

    onSubmit = () => {
        let newDeck = {
            [this.props.deck.title] : {
              title: this.props.deck.title,
              questions: [
                ...this.props.deck.questions,
              {
                question: this.state.newQuestion,
                answer: this.state.newAnswer
              }]
            }
        };
        let reduxDeck = {
              title: this.props.deck.title,
              questions: [
                ...this.props.deck.questions,
              {
                question: this.state.newQuestion,
                answer: this.state.newAnswer
              }]
        };
        this.props.selectDeck(reduxDeck);
        this.props.addDeck(reduxDeck);
        saveDeck(newDeck);
        this.props.navigation.navigate('deck');
    }

  render() {
    return (
       <View>
            <TextInput 
                style={styles.inputBox}
                onChangeText={(newQuestion) => this.setState({newQuestion})}
                value={this.state.newQuestion}
                />
            <TextInput 
                style={styles.inputBox}
                onChangeText={(newAnswer) => this.setState({newAnswer})}
                value={this.state.newAnswer}
                />
            <TouchableOpacity 
                style={styles.button}
                onPress={this.onSubmit}>
                <Text style={{ color: "white" }}>Submit</Text>
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
    inputBox: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 4
    },
    button: {
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

const mapDispatchToProps = (dispatch) => {
  return {
    addDeck: (deck) => dispatch(addDeck(deck)),
    selectDeck: (deck) => dispatch(selectDeck(deck))
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (NewQuestion);