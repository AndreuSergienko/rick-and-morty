import { ACTIONS } from '../../constants';

const initialState = {
  canDataLoad: true,
};

export const switchers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.toggleCanDataLoad:
      return {
        ...state,
        canDataLoad: action.payload,
      };
    default:
      return state;
  }
};

export const toggleCanDataLoadAC = (payload) => ({
  type: ACTIONS.toggleCanDataLoad,
  payload,
});
