import { API } from '../config';

export const sendRequest = (url, method, data) => {
	return fetch(`${API}${url}`, makeRequestOptions(url, method, data)).then(
		(response) => response.json()
	);
};
