import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useIsMount } from '../../hooks/useIsMount';
import { Button } from '../Button';
import { userRegisterThunk } from '../../store/user/thunk';

export const Registration = () => {
	const [credentials, setCredentials] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [submitted, setSubmitted] = useState(false);
	const history = useHistory();
	const dispatch = useDispatch();
	const isMount = useIsMount();

	useEffect(() => {
		if (!isMount) {
			dispatch(userRegisterThunk(credentials, history));
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
				<Button type='submit' text='Registration' />
			</form>
			<p>
				If you have no account you can <Link to='/login'>login</Link>
			</p>
		</div>
	);
};
