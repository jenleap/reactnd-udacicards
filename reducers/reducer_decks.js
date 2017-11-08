import { GET_DECKS, ADD_DECK, UPDATE_DECK, SELECT_DECK } from '../actions';
import { makeArray } from './../utils/api';


export function decks (state = [], action) {
  switch (action.type) {
    case GET_DECKS :
        let decks = makeArray(action.decks);
        return decks;
    default :
      return state;
  }
}

export function selectedDeck (state = {}, action) {
  switch (action.type) {
    case SELECT_DECK :
      return action.deck;
    default :
      return state;
  }
}