import { LOGIN, LOGOUT, REGISTER } from './actionTypes';

export const register = () => ({
	type: REGISTER,
});

export const login = (payload, isAdmin) => ({
	type: LOGIN,
	payload: {
		name: payload.user.name,
		email: payload.user.email,
		token: payload.result,
	},
	isAdmin,
});

export const logout = () => ({
	type: LOGOUT,
});
