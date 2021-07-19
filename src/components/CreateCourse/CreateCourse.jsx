import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../Button/Button';
import { mockedAuthorsList } from '../../mocks/mockedAuthorsList';
import { formatDuration } from '../../utils/formatDuration';

export const CreateCourse = ({
	courses,
	setCourses,
	setCreateCourseIsShown,
}) => {
	const [mockedAuthors, setMockedAuthors] = useState(mockedAuthorsList);
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [duration, setDuration] = useState(0);
	const [newCourse, setNewCourse] = useState({
		id: '',
		title: '',
		description: '',
		creationDate: '',
		duration: 0,
		authors: [],
	});

	const handleAddAuthor = (event) => {
		event.preventDefault();
		setMockedAuthors([
			...mockedAuthors,
			{ id: uuidv4(), name: event.target[0].value },
		]);
		event.target[0].value = '';
	};

	const handleAddCourseAuthor = (author, event) => {
		event.preventDefault();
		setMockedAuthors(
			mockedAuthors.filter((mockedAuthor) => mockedAuthor.id !== author.id)
		);
		setCourseAuthors([...courseAuthors, author]);
	};

	const handleDeleteCourseAuthor = (author, event) => {
		event.preventDefault();
		setCourseAuthors(
			courseAuthors.filter((courseAuthor) => courseAuthor.id !== author.id)
		);
		setMockedAuthors([...mockedAuthors, author]);
	};

	const handleDuration = (event) => {
		if (event.target.value > 0) {
			setDuration(formatDuration(event.target.value.toString()));
			setNewCourse({ ...newCourse, duration: event.target.value });
		}
	};

	const handleCreateCourse = () => {
		setCourses([
			...courses,
			{
				...newCourse,
				id: uuidv4(),
				creationDate: new Date().toLocaleDateString(),
				authors: courseAuthors,
			},
		]);
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
						onChange={(e) => onChangeTitle(e)}
					/>
				</div>
				<div className='details'>
					<button
						onClick={() => {
							setCreateCourseIsShown(false);
							handleCreateCourse();
						}}
					>
						Create course
					</button>
				</div>
			</div>
			<div className='main create-course__description'>
				<h3>Description</h3>
				<textarea rows='5' onChange={(e) => onChangeDescription(e)} />
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
							/>
						</form>
						<p>Duration: {duration} hours</p>
					</div>
				</div>
				<div className='details'>
					<div className='authors'>
						<h3>Authors</h3>
						{mockedAuthors.length > 0
							? mockedAuthors.map((mockedAuthor) => {
									return (
										<div className='author-wrapper' key={mockedAuthor.id}>
											<form
												onSubmit={(event) =>
													handleAddCourseAuthor(mockedAuthor, event)
												}
											>
												<p>{mockedAuthor.name}</p>
												<Button text={'Add author'} author={mockedAuthor} />
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
												<Button text={'Delete author'} />
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
