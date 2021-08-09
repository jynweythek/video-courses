import { ApiCall } from '../../utils/apiCall';
import { getCourses } from './actions';

export const coursesThunk = () => {
	return (dispatch) => {
		ApiCall.get(`/courses/all`).then(({ result }) => {
			dispatch(getCourses(result));
		});
	};
};
