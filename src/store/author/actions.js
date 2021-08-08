import { DELETE_AUTHOR, GET_AUTHORS, SAVE_NEW_AUTHOR } from './actionTypes';

export const getAuthors = (result) => {
	return {
		type: GET_AUTHORS,
		payload: result.map((author) => author),
	};
};

export const saveNewAuthor = (author) => {
	return {
		type: SAVE_NEW_AUTHOR,
		payload: author,
	};
};

export const deleteAuthor = (author) => {
	return {
		type: DELETE_AUTHOR,
		payload: author,
	};
};
