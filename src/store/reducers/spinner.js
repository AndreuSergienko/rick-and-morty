import { ACTIONS } from '../../constants';

const initialState = {
	isLoading: false,
};

export const spinner = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.setIsLoading:
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};

export const setIsLoadingAC = (payload) => ({
	type: ACTIONS.setIsLoading,
	payload,
});
