import { ApiCall } from '../../utils/apiCall';
import { getAuthors } from './actions';

export const authorsThunk = () => {
	return (dispatch) => {
		ApiCall.get(`/authors/all`).then(({ result }) =>
			dispatch(getAuthors(result))
		);
	};
};
