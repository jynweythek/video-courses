import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { API } from '../../config';
import { useIsMount } from '../../hooks/useIsMount';

export const Registration = () => {
	const [credentials, setCredentials] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [submitted, setSubmitted] = useState(false);
	const history = useHistory();

	const isMount = useIsMount();

	useEffect(() => {
		if (!isMount) {
			axios
				.post(`${API}/register`, credentials)
				.then(() => history.push('/login'));
		}
	}, [submitted]);

	const handleRegisterSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<div className='container registration'>
			<h1>Registration</h1>
			<form onSubmit={handleRegisterSubmit}>
				<label htmlFor='email'>Name</label>
				<input
					type='text'
					placeholder='Enter name'
					onChange={(e) =>
						setCredentials({ ...credentials, name: e.target.value })
					}
				/>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					placeholder='Enter email'
					onChange={(e) =>
						setCredentials({ ...credentials, email: e.target.value })
					}
				/>
				<label htmlFor='password'>Password</label>
				<input
					type='text'
					placeholder='Enter password'
					onChange={(e) =>
						setCredentials({ ...credentials, password: e.target.value })
					}
				/>
				<button type='submit'>Registration</button>
			</form>
			<p>
				If you have no account you can <Link to='/login'>login</Link>
			</p>
		</div>
	);
};
