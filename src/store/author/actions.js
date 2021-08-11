import { DELETE_AUTHOR, GET_AUTHORS, SAVE_NEW_AUTHOR } from './actionTypes';

export const getAuthors = (result) => ({
	type: GET_AUTHORS,
	payload: result.map((author) => author),
});

export const saveNewAuthor = (author) => ({
	type: SAVE_NEW_AUTHOR,
	payload: author,
});

export const deleteAuthor = (author) => ({
	type: DELETE_AUTHOR,
	payload: author,
});
