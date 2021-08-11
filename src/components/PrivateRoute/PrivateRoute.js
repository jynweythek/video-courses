import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UpdateCourse } from '../UpdateCourse/UpdateCourse';

export const PrivateRoute = ({ component, isAdmin, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAdmin ? <UpdateCourse {...props} /> : <Redirect to='/courses' />
		}
	/>
);
