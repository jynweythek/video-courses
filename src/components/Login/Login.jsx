import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../config';
import { useIsMount } from '../../hooks/useIsMount';
import { Button } from '../Button';

export const Login = () => {
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
				.post(`${API}/login`, credentials)
				.then(() => history.push('/'))
				.catch((error) => console.log(error));
		}
	}, [submitted]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<div className='login container'>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					placeholder='Enter email'
					value={credentials.email}
					onChange={(e) =>
						setCredentials({ ...credentials, email: e.target.value })
					}
				/>
				<label htmlFor='password'>Password</label>
				<input
					type='text'
					placeholder='Enter password'
					value={credentials.password}
					onChange={(e) =>
						setCredentials({ ...credentials, password: e.target.value })
					}
				/>
				<Button type='submit' text='Login' />
			</form>
			<p>
				If you have no account you can <Link to='/registration'>register</Link>
			</p>
		</div>
	);
};
