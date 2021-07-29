import React from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';

export const CourseInfo = () => {
	const params = useParams();
	const location = useLocation();
	const history = useHistory();

	const handleBack = () => {
		history.goBack();
	};

	return (
		<div className='container course-info'>
			<button className='course-info__back' onClick={handleBack}>
				&#8592; Go Back
			</button>

			<div className='main'>
				<h3>{location.state.title}</h3>
				<p>{location.state.description}</p>
			</div>
			<div className='details'>
				<p>
					<strong>ID:</strong> {params.id}
				</p>
				<p>
					<strong>Duration: </strong>
					{location.state.duration} hours
				</p>
				<p>
					<strong>Created:</strong> {location.state.creationDate}
				</p>
				<p>
					<strong>Authors:</strong> {location.state.authors}
				</p>
			</div>
		</div>
	);
};
