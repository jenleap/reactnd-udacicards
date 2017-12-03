import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'UdaciCards:decks2';

export function setDummyData() {
    const dummyData = {
        Vitamins: {
            title: 'Vitamins',
            questions: [
                {
                question: 'What is Vitamin A also called?',
                answer: 'Carotene'
            },
            {
                question: 'What are the best sources of B12?',
                answer: 'Meats, milk products, seafood'
            },
            {
                question: 'What is the function of Vitamin D?',
                answer: 'Aids in the formation of bones and teeth'
                }
            ]
        }
    };
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(dummyData));
    return JSON.parse(dummyData);
}

export function formatResults(results) {
    return results === null
    ? setDummyData()
    : JSON.parse(results)
}

export function fetchDecks() {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(formatResults);
}

export function makeArray(obj) {
    let arr = [];
    for (let key in obj) {
        arr.push(obj[key]);
    }
    return arr;
}

export function saveDeck(deck) {
     return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(deck));
}

export function saveQuestion(deckTitle, card) {
    let decks;
    AsyncStorage.getItem(STORAGE_KEY)
        .then(data => {
            decks = JSON.parse(data);
            let deck = {
                [deckTitle] : {
                    questions: [
                        ...decks[deckTitle].questions,
                        card
                    ]
                }
            };
            return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(deck));
        });
    
}



