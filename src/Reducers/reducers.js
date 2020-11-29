import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions/type";

const defaultState = { characters: [] };

const charactersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        characters: [
          ...state.characters,
          state.characters.find(
            (favorite) => favorite.name === action.character.name
          ) === undefined && action.character,
        ],
      };

    case REMOVE_CHARACTER:
      return {
        characters: [
          ...state.characters.filter(
            (character) => character.name !== action.character.name
          ),
        ],
      };

    default:
      return defaultState;
  }
};
export default charactersReducer;
