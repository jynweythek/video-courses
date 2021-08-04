import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { useDispatch } from 'react-redux';
import { deleteCourse } from '../../store/courses/actionCreators';

export const CourseCard = (course) => {
	const dispatch = useDispatch();
	const handleDeleteCourse = (course, event) => {
		event.preventDefault();
		dispatch(deleteCourse(course));
	};

	return (
		<div className='container card-wrapper'>
			<div className='main'>
				<h3>{course.title}</h3>
				<p className='article--description'>{course.description}</p>
			</div>
			<div className='details'>
				<p className='details--authors'>
					<strong>Authors:</strong> {course.authors}
				</p>
				<p>
					<strong>Duration: </strong>
					{course.duration} hours
				</p>
				<p>
					<strong>Created:</strong> {course.creationDate}
				</p>
				<Link to={{ pathname: `/courses/${course.id}`, state: course }}>
					Show course
				</Link>
				<Button
					text={'Delete'}
					onClick={(e) => handleDeleteCourse(course, e)}
				/>
			</div>
		</div>
	);
};
