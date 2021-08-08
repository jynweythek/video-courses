import { ApiCall } from '../../utils/apiCall';
import { login } from './actions';

export async function thunkUser(dispatch, getState, credentials, isAdmin) {
	return await ApiCall.post(`/login`, credentials).then((data) => {
		localStorage.setItem('coursesToken', data.result);
		localStorage.setItem('isAdmin', isAdmin.toString());
		dispatch(login(data, isAdmin));
	});
}
