import { ACTIONS } from '../../constants';

const initialState = {
	allCharacters: null,
	currentCharacter: null,
};

export const characters = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.setCharacters:
			return { ...state, allCharacters: action.payload };
		case ACTIONS.setCurrentCharacter:
			return { ...state, currentCharacter: action.payload };
		default:
			return state;
	}
};

export const setCharactersAC = (payload) => ({
	type: ACTIONS.setCharacters,
	payload,
});
export const setCurrentCharacterAC = (payload) => ({
	type: ACTIONS.setCurrentCharacter,
	payload,
});
