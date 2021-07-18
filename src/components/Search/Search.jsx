import React from 'react';
import { Input } from '../Input/Input';
import { mockedCoursesList } from '../../mocks/mockedCourcesList';

export const Search = ({ courses, setCourses }) => {
	const searchHandler = (event, setCourses) => {
		event.preventDefault();
		return setCourses(
			mockedCoursesList.filter((mockedCourse) =>
				mockedCourse.title
					.toLowerCase()
					.includes(event.target[0].value.trim().toLowerCase())
			)
		);
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
