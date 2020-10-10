import { act } from 'react-test-renderer';
import { RECEIVE_ENTRIES, ADD_DECK } from '../actions'

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
        [action.entry.name]:{
          title: action.entry.name,
          questions: []
        }
      }
    default:
      return state;
  }
}