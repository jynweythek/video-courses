import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { CourseCard } from '../CourseCard/CourseCard';
import { formatDuration } from '../../utils/formatDuration';
import { formatDate } from '../../utils/formatDate';
import { getAuthors } from '../../store/author/actionCreators';
import { API } from '../../config';

export const Courses = ({ courses }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		axios
			.get(`${API}/authors/all`)
			.then(({ data }) => dispatch(getAuthors(data.result)));
	}, []);

	const state = useSelector((state) => state);

	const renderCourseCard = () =>
		courses.courses.map((course) => {
			return (
				<CourseCard
					id={course.id}
					title={course.title}
					description={course.description}
					authors={state['authors']}
					creationDate={formatDate(course.creationDate)}
					duration={formatDuration(course.duration)}
					key={course.id}
				/>
			);
		});

	return <>{renderCourseCard()}</>;
};
