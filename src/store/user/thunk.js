import { ApiCall } from '../../utils/apiCall';
import { login } from './actions';

export const thunkUser = (credentials, isAdmin) => {
	return (dispatch) => {
		ApiCall.post(`/login`, credentials).then((data) => {
			localStorage.setItem('coursesToken', data.result);
			localStorage.setItem('isAdmin', isAdmin.toString());
			dispatch(login(data, isAdmin));
		});
	};
};
