export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

export function receiveEntries(entries) {
  return {
    type: RECEIVE_ENTRIES,
    entries
  }
}

export function addDeck(entry) {
  return {
    type: ADD_DECK,
    ...entry
  }
}

export function addCard(entry) {
  return {
    type: ADD_CARD,
    ...entry
  }
}