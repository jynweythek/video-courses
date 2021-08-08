import { LOGIN, LOGOUT, REGISTER } from './actionTypes';

export const register = () => {
	return {
		type: REGISTER,
	};
};

export const login = (payload, isAdmin) => {
	return {
		type: LOGIN,
		payload: {
			name: payload.user.name,
			email: payload.user.email,
			token: payload.result,
		},
		isAdmin,
	};
};

export const logout = () => {
	return {
		type: LOGOUT,
	};
};
