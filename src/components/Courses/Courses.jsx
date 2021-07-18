import React from 'react';
import { CourseCard } from '../CourseCard/CourseCard';
import { mockedAuthorsList } from '../../mocks/mockedAuthorsList';
import { formatDuration } from '../../utils/formatDuration';

const getAuthors = (authors) =>
	mockedAuthorsList
		.filter((mockedAuthor) => authors.includes(mockedAuthor.id))
		.map((author) => author.name)
		.join(', ');

const formatDate = (date) => date.replace(/\//g, '.');

export const Courses = ({ courses }) => {
	const renderCourseCard = () =>
		courses.map((course, i) => {
			return (
				<CourseCard
					title={course.title}
					description={course.description}
					authors={getAuthors(course.authors)}
					creationDate={formatDate(course.creationDate)}
					duration={formatDuration(course.duration)}
					key={course.id}
				/>
			);
		});

	return <>{renderCourseCard()}</>;
};
