import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import DeckView from './components/DeckView';
import NewQuestion from './components/NewQuestion';
import QuizView from './components/QuizView';




const Tabs = TabNavigator({
    decklist: { 
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'DECKS'
      } 
    },
    newdeck: { 
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'NEW DECK'
      }  
    }
});

const MainNavigator = StackNavigator({
  home: {
    screen: Tabs
  },
  deck: {
    screen: DeckView
  },
  newquestion: {
    screen: NewQuestion
  },
  quiz: {
    screen: QuizView
  }
})

const store = createStore(reducer, {}, applyMiddleware(thunk));

export default class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
