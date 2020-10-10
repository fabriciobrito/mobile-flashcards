import { act } from 'react-test-renderer';
import { RECEIVE_ENTRIES, ADD_DECK, ADD_CARD } from '../actions'

export default function entries(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ENTRIES:
      return {
        ...state,
        ...action.entries
      }
    case ADD_DECK:
      return {
        ...state,
        [action.name]:{
          title: action.name,
          questions: []
        }
      }
    case ADD_CARD:
      return {
        ...state,
        [action.deck]:{
          ...state[action.deck],
          questions: [
            ...state[action.deck].questions,
            action.card
          ]
        }
      }
    default:
      return state;
  }
}