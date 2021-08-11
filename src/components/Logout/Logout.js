import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../Button';
import { logout } from '../../store/user/actions';
import { useDispatch } from 'react-redux';

export const Logout = ({ text }) => {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleClick = (e) => {
		e.preventDefault();
		localStorage.removeItem('coursesToken');
		localStorage.removeItem('isAdmin');
		dispatch(logout());
		history.push('/login');
	};

	return <Button text={text} onClick={handleClick} />;
};
