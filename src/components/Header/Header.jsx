import React from 'react';
import { Logo } from '../Logo/Logo';
import { Logout } from '../Logout/Logout';
import { useSelector } from 'react-redux';

export const Header = () => {
	const state = useSelector((state) => state);

	return (
		<div className='header container'>
			<Logo>Logo</Logo>
			<div className='account-group'>
				<span>{state['user']['email']}</span>
				<Logout text='Logout' />
			</div>
		</div>
	);
};
