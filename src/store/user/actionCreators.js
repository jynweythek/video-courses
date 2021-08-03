import { LOGIN, LOGOUT, REGISTER } from './actionTypes';

export function register() {
	return {
		type: REGISTER,
	};
}

export function login(payload) {
	return {
		type: LOGIN,
		payload: {
			name: payload.user.name,
			email: payload.user.email,
			token: payload.result,
		},
	};
}

export function logout() {
	return {
		type: LOGOUT,
	};
}
