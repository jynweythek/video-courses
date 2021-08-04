import { DELETE_AUTHOR, GET_AUTHORS, SAVE_NEW_AUTHOR } from './actionTypes';

export function getAuthors(result) {
	return {
		type: GET_AUTHORS,
		payload: result.map((author) => author),
	};
}

export function saveNewAuthor(author) {
	return {
		type: SAVE_NEW_AUTHOR,
		payload: author,
	};
}

export function deleteAuthor(author) {
	return {
		type: DELETE_AUTHOR,
		payload: author,
	};
}
