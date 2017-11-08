import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'UdaciCards:decks';

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



