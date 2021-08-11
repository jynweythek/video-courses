import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse } from '../../store/courses/actions';

export const CourseCard = (course) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const state = useSelector((state) => state);

	const handleUpdateCourse = (course, event) => {
		event.preventDefault();
		history.push(`/update/${course.id}`);
	};

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
					<strong>Authors:</strong>{' '}
					{course.authors.authors.map((author) => author.name.concat(', '))}
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
				{state['user']['isAdmin'] ? (
					<>
						<Button
							text={'Update'}
							onClick={(e) => handleUpdateCourse(course, e)}
						/>
						<Button
							text={'Delete'}
							onClick={(e) => handleDeleteCourse(course, e)}
						/>
					</>
				) : null}
			</div>
		</div>
	);
};
