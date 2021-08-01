import { combineReducers, createStore } from 'redux';
import { userReducer } from './user/reducer';

const rootReducer = combineReducers({
	user: userReducer,
	// courses: coursesReducer,
	// authors: authorsReducer,
});

export const store = createStore(rootReducer);
