import React from 'react';
import { Input } from '../Input/Input';

export const Search = ({ courses, setCourses }) => {
	const searchByTerm = (event, course) =>
		(event.target[0].value.length > 0 &&
			course.title
				.toLowerCase()
				.includes(event.target[0].value.trim().toLowerCase())) ||
		(event.target[0].value.length > 0 &&
			course.id
				.toLowerCase()
				.includes(event.target[0].value.trim().toLowerCase()));

	const searchHandler = (event, setCourses) => {
		event.preventDefault();
		return setCourses(courses.filter((course) => searchByTerm(event, course)));
	};

	return (
		<div className='search container'>
			<form onSubmit={(event) => searchHandler(event, setCourses)}>
				<Input type={'text'} placeholder={'Enter course name...'} />
				<Input type={'submit'} />
			</form>
		</div>
	);
};
