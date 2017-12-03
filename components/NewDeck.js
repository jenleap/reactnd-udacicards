import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { saveDeck } from './../utils/api';
import { addDeck, selectDeck } from './../actions';
import { connect } from 'react-redux';

class NewDeck extends React.Component {

    state = {
        deckTitle: 'Deck title'
    }

    onSubmit = () => {
      let newDeck = {
          [this.state.deckTitle] : {
            title: this.state.deckTitle,
            questions: []
          }
      };
      let reduxDeck =  {
            title: this.state.deckTitle,
            questions: []
      };
        this.props.addTheDeck(reduxDeck);
        this.props.selectDeck(reduxDeck);
        saveDeck(newDeck);
        this.props.navigation.navigate('deck');
    }
    
  render() {
    return (
      <View style={styles.container}>
            <Text style={{ fontSize: 25}}>What is the title of your new deck?</Text>
            <TextInput 
                style={styles.inputBox}
                onChangeText={(deckTitle) => this.setState({deckTitle})}
                value={this.state.deckTitle}
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

const mapDispatchToProps = (dispatch) => {
  return {
    addTheDeck: (deck) => dispatch(addDeck(deck)),
    selectDeck: (deck) => dispatch(selectDeck(deck))
  };
};

export default connect(null, mapDispatchToProps) (NewDeck);