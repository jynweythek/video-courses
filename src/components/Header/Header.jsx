import React from 'react';
import { Logo } from '../Logo/Logo';
import { Button } from '../Button/Button';

export const Header = () => {
	return (
		<div className='header container'>
			<Logo>Logo</Logo>
			<div className='account-group'>
				<span>Username</span>
				<Button text='Logout' />
			</div>
		</div>
	);
};
