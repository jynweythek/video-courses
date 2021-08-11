import {
	DELETE_COURSE,
	GET_COURSES,
	SAVE_NEW_COURSE,
	UPDATE_COURSE,
} from './actionTypes';

export const getCourses = (result) => ({
	type: GET_COURSES,
	payload: result.map((course) => course),
});

export const saveNewCourse = (course) => ({
	type: SAVE_NEW_COURSE,
	payload: course,
});

export const deleteCourse = (course) => ({
	type: DELETE_COURSE,
	payload: course,
});

export const updateCourse = (course) => ({
	type: UPDATE_COURSE,
	payload: course,
});
