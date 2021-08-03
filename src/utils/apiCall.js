import { API } from '../config';

export const ApiCall = (function () {
	const makeRequestOptions = (url, method, data = {}) => {
		const requestOptions = {
			method: method,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		};

		if (Object.keys(data).length !== 0) {
			requestOptions['body'] = JSON.stringify(data);
		}

		return requestOptions;
	};

	function sendRequest(url, method, data) {
		return fetch(`${API}${url}`, makeRequestOptions(url, method, data)).then(
			(response) => response.json()
		);
	}

	return {
		get: (url) => sendRequest(url, 'GET'),
		post: (url, data) => sendRequest(url, 'POST', data),
		delete: (url) => sendRequest(url, 'DELETE'),
		patch: (url, data) => sendRequest(url, 'PATCH', data),
	};
})();
