
export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const UPDATE_DECK = 'UPDATE_DECK';
export const SELECT_DECK = 'SELECT_DECK';

export function getDecks(decks) {
    return {
        type: GET_DECKS,
        payload: decks
  }
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    payload: deck
  }
}


export function selectDeck(deck) {
    return {
        type: SELECT_DECK,
        payload: deck
    }
}

