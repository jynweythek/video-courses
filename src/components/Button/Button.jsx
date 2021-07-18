import React from 'react';

export const Button = ({ text, author }) => {
	return <button data-author={author}>{text}</button>;
};
