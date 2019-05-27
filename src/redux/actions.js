export const LOAD_CHARACTERS = 'LOAD_CHARACTERS'
export const LOAD_CHARACTERS_SUCCESS = 'LOAD_CHARACTERS_SUCCESS'
export const LOAD_CHARACTERS_FAILED = 'LOAD_CHARACTERS_FAILED'

export const TOGGLE_CHARACTER = 'TOGGLE_CHARACTER'
export const TOGGLE_CHARACTER_SUCCESS = 'TOGGLE_CHARACTER_SUCCESS'
export const TOGGLE_CHARACTER_FAILED = 'TOGGLE_CHARACTER_FAILED'

export const loadCharacters = () => {
  return {
    type: LOAD_CHARACTERS
  }
}

export const toggleCharacter = (id) => {
  return {
    type: TOGGLE_CHARACTER,
    id: id
  }
}
