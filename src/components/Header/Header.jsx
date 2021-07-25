import React from 'react';
import { Logo } from '../Logo/Logo';
import { Button } from '../Button/Button';
import { useHistory } from 'react-router-dom';

export const Header = () => {
	const history = useHistory();

	const handleClick = (e) => {
		e.preventDefault();
		console.log(history);
		history.push('/login');
	};

	return (
		<div className='header container'>
			<Logo>Logo</Logo>
			<div className='account-group'>
				<span>Username</span>
				<Button text='Logout' onClick={handleClick} />
			</div>
		</div>
	);
};
