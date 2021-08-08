import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useIsMount } from '../../hooks/useIsMount';
import { Button } from '../Button';
import { login } from '../../store/user/actions';
import { ApiCall } from '../../utils/apiCall';
import { ADMIN_EMAIL, ADMIN_PASSWORD } from '../../config';
import { thunkUser } from '../../store/user/thunk';

export const Login = () => {
	const [credentials, setCredentials] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [isAdmin, setIsAdmin] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const history = useHistory();
	const isMount = useIsMount();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!isMount) {
			dispatch(thunkUser(credentials, isAdmin))
				// ApiCall.post(`/login`, credentials)
				// 	.then((data) => {
				// 		localStorage.setItem('coursesToken', data.result);
				// 		localStorage.setItem('isAdmin', isAdmin.toString());
				// 		dispatch(login(data, isAdmin));
				// 	})
				.then(() => history.push('/courses'))
				.catch((error) => console.log(error));
		}
	}, [submitted]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		if (
			credentials.email === ADMIN_EMAIL &&
			credentials.password === ADMIN_PASSWORD
		) {
			setIsAdmin(true);
		}
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
