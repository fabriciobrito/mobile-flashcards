export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const ADD_DECK = 'ADD_DECK';
export const DELETE_DECK = 'DELETE_DECK';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';

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

export function deleteDeck(entry) {
  return {
    type: DELETE_DECK,
    ...entry
  }
}

export function addCard(entry) {
  return {
    type: ADD_CARD,
    ...entry
  }
}

export function deleteCard(entry) {
  return {
    type: DELETE_CARD,
    ...entry
  }
}