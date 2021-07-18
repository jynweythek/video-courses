import React from 'react';

export const CourseCard = ({
	title,
	description,
	authors,
	duration,
	creationDate,
}) => {
	return (
		<div className='container card-wrapper'>
			<div className='main'>
				<h3>{title}</h3>
				<p className='article--description'>{description}</p>
			</div>
			<div className='details'>
				<p className='details--authors'>
					<strong>Authors:</strong> {authors}
				</p>
				<p>
					<strong>Duration: </strong>
					{duration} hours
				</p>
				<p>
					<strong>Created:</strong> {creationDate}
				</p>
				<button>Show course</button>
			</div>
		</div>
	);
};
