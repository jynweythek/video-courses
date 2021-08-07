import { LOGIN, LOGOUT, REGISTER } from './actionTypes';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export function userReducer(state = initialState, action) {
	switch (action.type) {
		case REGISTER:
			return { ...state, isAuth: false, name: '', email: '', token: '' };
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
