import './App.css';
import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';
import { useState } from 'react';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { Search } from './components/Search/Search';
import { mockedCoursesList } from './mocks/mockedCourcesList';

function App() {
	const currentCourses = mockedCoursesList;
	const [courses, setCourses] = useState(currentCourses);
	const [createCourseIsShown, setCreateCourseIsShown] = useState(false);

	return (
		<div className='App'>
			<Header setCreateCourseIsShown={setCreateCourseIsShown} />
			{!createCourseIsShown ? (
				<>
					<Search courses={courses} setCourses={setCourses} />
					<div className='add-course-wrapper container'>
						<button onClick={() => setCreateCourseIsShown(true)}>
							Add New Course
						</button>
					</div>
					<Courses courses={courses} />
				</>
			) : (
				<CreateCourse
					courses={courses}
					setCourses={setCourses}
					setCreateCourseIsShown={setCreateCourseIsShown}
				/>
			)}
		</div>
	);
}

export default App;
