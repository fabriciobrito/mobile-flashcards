export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const ADD_DECK = 'ADD_DECK';

export function receiveEntries(entries) {
  return {
    type: RECEIVE_ENTRIES,
    entries
  }
}

export function addDeck(entry) {
  return {
    type: ADD_DECK,
    entry
  }
}