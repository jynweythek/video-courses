import { DELETE_AUTHOR, GET_AUTHORS, SAVE_NEW_AUTHOR } from './actionTypes';

const initialState = {
	authors: [],
};

export function authorsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_AUTHORS:
			return { ...state, authors: action.payload };
		case SAVE_NEW_AUTHOR:
			return {
				...state,
				authors: [...state.authors, action.payload],
			};
		case DELETE_AUTHOR:
			return {
				...state,
				authors: state.authors.filter((a) => a.id !== action.payload.id),
			};
		default:
			return state;
	}
}
