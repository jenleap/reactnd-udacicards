
export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const UPDATE_DECK = 'UPDATE_DECK';
export const SELECT_DECK = 'SELECT_DECK';

export function getDecks(decks) {
    return {
        type: GET_DECKS,
        decks
  }
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function updateDeck(deck) {
  return {
    type: UPDATE_DECK,
    deck
  }
}

export function selectDeck(deck) {
    return {
        type: SELECT_DECK,
        deck
    }
}

