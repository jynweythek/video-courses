import {
	DELETE_COURSE,
	GET_COURSES,
	SAVE_NEW_COURSE,
	UPDATE_COURSE,
} from './actionTypes';

export function getCourses(result) {
	return {
		type: GET_COURSES,
		payload: result.map((course) => course),
	};
}

export function saveNewCourse(course) {
	return {
		type: SAVE_NEW_COURSE,
		payload: course,
	};
}

export function deleteCourse(course) {
	return {
		type: DELETE_COURSE,
		payload: course,
	};
}

export function updateCourse(course) {
	return {
		type: UPDATE_COURSE,
	};
}
