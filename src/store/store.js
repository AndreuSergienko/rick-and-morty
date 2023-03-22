import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { characters, spinner, switchers } from './reducers';

const reducers = combineReducers({
	characters,
	spinner,
	switchers,
});

export const store = createStore(reducers, composeWithDevTools());
