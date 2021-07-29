import React from 'react';

export const Button = ({ text, author, onClick }) => {
	return (
		<button data-author={author} onClick={onClick}>
			{text}
		</button>
	);
};
