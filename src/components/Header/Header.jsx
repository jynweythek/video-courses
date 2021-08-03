import React from 'react';
import { Logo } from '../Logo/Logo';
import { Logout } from '../Logout/Logout';

export const Header = () => {
	return (
		<div className='header container'>
			<Logo>Logo</Logo>
			<div className='account-group'>
				<span>Username</span>
				<Logout text='Logout' />
			</div>
		</div>
	);
};
