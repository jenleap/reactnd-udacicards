import { GET_DECKS, ADD_DECK, UPDATE_DECK, SELECT_DECK } from '../actions';
import { makeArray } from './../utils/api';


export function decks (state = [], action) {
  switch (action.type) {
    case GET_DECKS :
        let decks = makeArray(action.payload);
        return decks;
    case ADD_DECK :
        return [
          ...state,
          action.payload
        ]
    default :
      return state;
  }
}

export function selectedDeck (state = {}, action) {
  switch (action.type) {
    case SELECT_DECK :
      return action.payload;
    default :
      return state;
  }
}