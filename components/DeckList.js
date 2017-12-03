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
      <View style={styles.container}>
        {this.props.decks.map( d => {
            return (
                <TouchableOpacity style={styles.deckItem}
                    key={d.title}
                    onPress={() => this.openDeck(d)}>
                    <Text style={{ fontSize: 18}}>{d.title}</Text>
                    {d.questions ? (
                        <Text style={styles.cardCount}>{d.questions.length} Cards</Text>
                    ) : (
                        <Text style={styles.cardCount}>0 Cards</Text>
                    )}
                </TouchableOpacity>
            )
        })}
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
    deckItem: {
        margin: 10,
        padding: 10,
    },
    cardCount: {
        fontSize: 16,
        color: 'grey'
    }
});

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