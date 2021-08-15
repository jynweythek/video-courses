import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { CourseForm } from '../components/CourseForm/CourseForm';
import { render } from './util';

const courses = [
	{
		authors: ['9b87e8b8-6ba5-40fc-a439-c4e30a373d36'],
		creationDate: '9/3/2021',
		description: 'description',
		duration: 30,
		id: '66cc289e-6de9-49b2-9ca7-8b4f409d6467',
		title: 'title',
	},
];

test('renders CourseForm component if create course', () => {
	render(<CourseForm courses={[]} />);
	expect(screen.getByText(/Create course/i)).toBeInTheDocument();
});

test('renders CourseForm component if update course', () => {
	render(<CourseForm courses={courses} />);
	expect(screen.getByText(/Update course/i)).toBeInTheDocument();
});

test('description prop goes to the CourseForm component as textarea value', () => {
	render(<CourseForm courses={courses} />);
	expect(screen.getByTestId(/textarea/i)).toHaveValue('description');
});

test('description prop goes to the CourseForm component as textarea value', () => {
	render(<CourseForm courses={courses} />);

	fireEvent.click(screen.getByTestId('delete'));

	expect(screen.getByText('Authors list is empty')).toBeInTheDocument();
});
