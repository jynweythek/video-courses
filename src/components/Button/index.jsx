import React from 'react';

export const Button = ({ text, author, onClick, dataTestid }) => {
	return (
		<button data-author={author} onClick={onClick} data-testid={dataTestid}>
			{text}
		</button>
	);
};
