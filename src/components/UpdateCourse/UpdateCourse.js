import React from 'react';
import { CourseForm } from '../CourseForm/CourseForm';
import { useSelector } from 'react-redux';

export const UpdateCourse = (props) => {
	const state = useSelector((state) => state);

	return <CourseForm courses={state['courses']['courses']} />;
};
