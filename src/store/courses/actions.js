import {
	DELETE_COURSE,
	GET_COURSES,
	SAVE_NEW_COURSE,
	UPDATE_COURSE,
} from './actionTypes';

export const getCourses = (result) => {
	return {
		type: GET_COURSES,
		payload: result.map((course) => course),
	};
};

export const saveNewCourse = (course) => {
	return {
		type: SAVE_NEW_COURSE,
		payload: course,
	};
};

export const deleteCourse = (course) => {
	return {
		type: DELETE_COURSE,
		payload: course,
	};
};

export const updateCourse = (course) => {
	return {
		type: UPDATE_COURSE,
		payload: course,
	};
};
