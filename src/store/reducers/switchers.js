import { ACTIONS } from '../../constants';

const initialState = {
	isDataLoading: true,
};

export const switchers = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.toggleDataLoading:
			return {
				...state,
				isDataLoading: action.payload,
			};
		default:
			return state;
	}
};

export const toggleDataLoadingAC = (payload) => ({
	type: ACTIONS.toggleDataLoading,
	payload,
});
