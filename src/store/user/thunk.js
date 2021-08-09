import { ApiCall } from '../../utils/apiCall';
import { login, register } from './actions';

export const userLoginThunk = (credentials, isAdmin, history) => {
	return (dispatch) => {
		ApiCall.post(`/login`, credentials)
			.then((data) => {
				localStorage.setItem('coursesToken', data.result);
				localStorage.setItem('isAdmin', isAdmin.toString());
				dispatch(login(data, isAdmin));
			})
			.then(() => history.push('/courses'))
			.catch((error) => console.log(error));
	};
};

export const userRegisterThunk = (credentials, history) => {
	return (dispatch) => {
		ApiCall.post(`/register`, credentials)
			.then(() => dispatch(register()))
			.then(() => history.push('/login'));
	};
};
