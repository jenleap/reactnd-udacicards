import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchDecks } from './../utils/api';
import { getDecks, selectDeck } from './../actions';

class DeckList extends React.Component {
    state = {
        ready: false
    }

    componentWillMount() {
        fetchDecks()
            .then(d => this.props.getDecks(d))
            .then(() => this.setState({ready: true}));
    }

    openDeck(deck) {
        this.props.selectDeck(deck);
        this.props.navigation.navigate('deck');
    }

  render() {
    if (this.state.ready === false) {
        return (
            <View>
                <Text>Loading decks...</Text>
            </View>
        )
    }

    return (
      <View>
        {this.props.decks.map( d => {
            return (
                <TouchableOpacity 
                    key={d.title}
                    onPress={() => this.openDeck(d)}>
                    <Text>{d.title}</Text>
                    <Text>{d.questions.length} Cards</Text>
                </TouchableOpacity>
            )
        })}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    decks: state.decks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDecks: (decks) => dispatch(getDecks(decks)),
    selectDeck: (deck) => dispatch(selectDeck(deck))
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (DeckList);