import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { characters, spinner } from './reducers';

const reducers = combineReducers({
	characters,
	spinner,
});

export const store = createStore(reducers, composeWithDevTools());
