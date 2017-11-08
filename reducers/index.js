import { combineReducers } from 'redux';

import { decks, selectedDeck } from './reducer_decks';


const rootReducer = combineReducers({
    decks,
    selectedDeck
});

export default rootReducer;