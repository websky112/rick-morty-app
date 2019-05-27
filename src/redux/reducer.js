import {
  LOAD_CHARACTERS_SUCCESS,
  LOAD_CHARACTERS_FAILED,
  TOGGLE_CHARACTER_FAILED,
  TOGGLE_CHARACTER_SUCCESS
} from './actions'

const initialState = {
  characters: null,
  character: null
}

const character = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.characters
      }
    case LOAD_CHARACTERS_FAILED:
      return {
        ...state,
        characters: null
      }
    case TOGGLE_CHARACTER_SUCCESS:
      return {
        ...state,
        character: action.character
      }
    case TOGGLE_CHARACTER_FAILED:
      return {
        ...state,
        character: null
      }
    default:
      return state
  }
}

export default character
