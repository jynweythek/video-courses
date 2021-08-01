import { LOGIN, LOGOUT, REGISTER } from './actionTypes';

export function register() {
	return {
		type: REGISTER,
	};
}

export function login() {
	return {
		type: LOGIN,
	};
}

export function logout() {
	return {
		type: LOGOUT,
	};
}
