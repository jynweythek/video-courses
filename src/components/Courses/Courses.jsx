import React, { useEffect, useState } from 'react';
import { CourseCard } from '../CourseCard/CourseCard';
import { formatDuration } from '../../utils/formatDuration';
import axios from 'axios';
import { API } from '../../config';
import { formatDate } from '../../utils/formatDate';

export const Courses = ({ courses }) => {
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/authors/all`)
			.then((response) =>
				setAuthors(
					response.data.result.map((author) => author.name.concat(', '))
				)
			);
	}, []);

	const renderCourseCard = () =>
		courses.map((course) => {
			return (
				<CourseCard
					id={course.id}
					title={course.title}
					description={course.description}
					authors={authors}
					creationDate={formatDate(course.creationDate)}
					duration={formatDuration(course.duration)}
					key={course.id}
				/>
			);
		});

	return <>{renderCourseCard()}</>;
};
