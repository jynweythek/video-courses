import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../Button';
import { formatDuration } from '../../utils/formatDuration';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveNewCourse } from '../../store/courses/actions';
import { authorsThunk } from '../../store/author/thunk';

export const CourseForm = ({ courses, setCourses }) => {
	const [fetchedAuthors, setFetchedAuthors] = useState(
		courses.map((course) => course.authors.map((author) => author.name))
	);
	const [courseAuthors, setCourseAuthors] = useState([
		courses.map((course) => course.authors),
	]);
	const [duration, setDuration] = useState(
		courses.map((course) => formatDuration(course.duration))
	);
	const [newCourse, setNewCourse] = useState({
		id: '',
		title: '',
		description: '',
		creationDate: '',
		duration: 0,
		authors: [],
	});
	const history = useHistory();
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	useEffect(() => {
		dispatch(authorsThunk());
		setFetchedAuthors(state['authors']['authors']);
	}, []);

	const handleAddAuthor = (event) => {
		event.preventDefault();
		setFetchedAuthors([
			...fetchedAuthors,
			{ id: uuidv4(), name: event.target[0].value },
		]);
		event.target[0].value = '';
	};

	const handleAddCourseAuthor = (author, event) => {
		event.preventDefault();
		setFetchedAuthors(
			fetchedAuthors.filter((fetchedAuthor) => fetchedAuthor.id !== author.id)
		);
		setCourseAuthors([...courseAuthors, author]);
	};

	const handleDeleteCourseAuthor = (author, event) => {
		event.preventDefault();
		setCourseAuthors(
			courseAuthors.filter((courseAuthor) => courseAuthor.id !== author.id)
		);
		setFetchedAuthors([...fetchedAuthors, author]);
	};

	const handleDuration = (event) => {
		if (event.target.value > 0) {
			setDuration(formatDuration(event.target.value.toString()));
			setNewCourse({ ...newCourse, duration: event.target.value });
		}
	};

	const handleCreateCourse = () => {
		dispatch(
			saveNewCourse({
				...newCourse,
				id: courses.length ? courses.map((course) => course.id) : uuidv4(),
				creationDate: new Date().toLocaleDateString(),
				authors: courseAuthors,
			})
		);
		history.push('/courses');
	};

	const onChangeTitle = (e) => {
		setNewCourse({ ...newCourse, title: e.target.value });
	};

	const onChangeDescription = (e) => {
		setNewCourse({ ...newCourse, description: e.target.value });
	};

	return (
		<div className='create-course container'>
			<div className='create-course__title'>
				<div className='main'>
					<h3>Title:</h3>
					<input
						type='text'
						placeholder='Enter title...'
						onChange={onChangeTitle}
						value={
							courses.length
								? courses.map((course) => course.title)
								: newCourse.title
						}
					/>
				</div>
				<div className='details'>
					<Button
						onClick={handleCreateCourse}
						text={courses.length ? 'Update course' : 'Create course'}
					/>
				</div>
			</div>
			<div className='main create-course__description'>
				<h3>Description</h3>
				<textarea
					rows='5'
					onChange={onChangeDescription}
					value={
						courses.length
							? courses.map((course) => course.description)
							: newCourse.description
					}
					data-testid='textarea'
				/>
			</div>
			<div className='add-authors container'>
				<div className='main'>
					<div className='create-author'>
						<h3>Add author</h3>
						<form onSubmit={handleAddAuthor}>
							<label>Author name</label>
							<input type={'text'} placeholder={'Enter author name...'} />
							<Button text={'Create author'} />
						</form>
					</div>
					<div className='duration'>
						<h3>Duration</h3>
						<form>
							<label>Duration</label>
							<input
								type={'number'}
								placeholder={'Enter duration in minutes...'}
								pattern='[0-9]'
								onChange={(event) => handleDuration(event)}
								value={courses.length ? duration : newCourse.duration}
							/>
						</form>
						<p>Duration: {duration} hours</p>
					</div>
				</div>
				<div className='details'>
					<div
						key={courses.length ? courses.map((course) => course.id) : null}
						className='authors'
					>
						<h3>Authors</h3>
						{fetchedAuthors.length > 0
							? fetchedAuthors.map((fetchedAuthor) => {
									return (
										<div className='author-wrapper' key={fetchedAuthor.id}>
											<form
												onSubmit={(event) =>
													handleAddCourseAuthor(fetchedAuthor, event)
												}
											>
												<p>{fetchedAuthor.name}</p>
												<Button text={'Add author'} author={fetchedAuthor} />
											</form>
										</div>
									);
							  })
							: 'There is no authors. You can create one.'}
					</div>
					<div className='course-authors'>
						<h3>Course authors</h3>
						{courseAuthors.length
							? courseAuthors.map((courseAuthor) => {
									return (
										<form
											key={courseAuthor.id}
											onSubmit={(event) =>
												handleDeleteCourseAuthor(courseAuthor, event)
											}
										>
											<div className='author-wrapper' key={courseAuthor.id}>
												<p>{courseAuthor.name}</p>
												<Button dataTestid='delete' text={'Delete author'} />
											</div>
										</form>
									);
							  })
							: 'Authors list is empty'}
					</div>
				</div>
			</div>
		</div>
	);
};
