import { LOGIN, LOGOUT, REGISTER } from './actionTypes';

export const initialState = {
	isAuth: Boolean,
	name: String,
	email: String,
	token: String,
};

export function userReducer(state = initialState, action) {
	switch (action.type) {
		case REGISTER:
			return { ...state, value: action.payload };
		case LOGIN:
			return {
				...state,
				isAuth: true,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
			};
		case LOGOUT:
			return { ...state, isAuth: false, name: '', email: '', token: '' };
		default:
			return state;
	}
}
