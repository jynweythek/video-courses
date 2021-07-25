import React from 'react';
import { Link } from 'react-router-dom';

export const CourseCard = (course) => {
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
			</div>
		</div>
	);
};
