import { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';
import { Registration } from './components/Registration/Registration';
import { Login } from './components/Login/Login';
import { CourseForm } from './components/CourseForm/CourseForm';
import { Search } from './components/Search/Search';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { UpdateCourse } from './components/UpdateCourse/UpdateCourse';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import './App.css';
import { coursesThunk } from './store/courses/thunk';

function App() {
	const [courses, setCourses] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(coursesThunk());
	}, []);

	const state = useSelector((state) => state);

	return (
		<div className='App'>
			<Switch>
				<Route exact path='/courses'>
					<Header />
					<>
						<Search courses={courses} setCourses={setCourses} />
						<div className='add-course-wrapper container'>
							<Link to='/courses/add'>Add New Course</Link>
						</div>
						<Courses courses={state['courses']} />
					</>
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/registration'>
					<Registration />
				</Route>
				<Route exact path='/courses/add'>
					<CourseForm courses={courses} setCourses={setCourses} />
				</Route>
				<Route path='/courses/:id'>
					<CourseInfo />
				</Route>
				<Route path='/courses'>
					<Courses />
				</Route>
				<PrivateRoute
					exact
					path='/update/:id'
					component={UpdateCourse}
					isAdmin={state['user']['isAdmin']}
				/>
			</Switch>
		</div>
	);
}

export default App;
