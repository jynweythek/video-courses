import {
	DELETE_COURSE,
	GET_COURSES,
	SAVE_NEW_COURSE,
	UPDATE_COURSE,
} from './actionTypes';

const initialState = {
	courses: [],
};

export function coursesReducer(state = initialState, action) {
	switch (action.type) {
		case GET_COURSES:
			return { ...state, courses: action.payload };
		case SAVE_NEW_COURSE:
			return {
				...state,
				...action.payload,
			};
		case DELETE_COURSE:
			return { ...state };
		case UPDATE_COURSE:
			return { ...state };
		default:
			return state;
	}
}
