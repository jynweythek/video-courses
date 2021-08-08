import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CourseCard } from '../CourseCard/CourseCard';
import { formatDuration } from '../../utils/formatDuration';
import { formatDate } from '../../utils/formatDate';
import { getAuthors } from '../../store/author/actions';
import { ApiCall } from '../../utils/apiCall';

export const Courses = ({ courses }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		ApiCall.get(`/authors/all`).then(({ result }) =>
			dispatch(getAuthors(result))
		);
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
