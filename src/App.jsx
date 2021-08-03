import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Registration } from './components/Registration/Registration';
import { Login } from './components/Login/Login';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { Search } from './components/Search/Search';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { getCourses } from './store/courses/actionCreators';
import { API } from './config';

function App() {
	const [courses, setCourses] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		axios
			.get(`${API}/courses/all`)
			.then(({ data }) => dispatch(getCourses(data.result)));
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
					<CreateCourse courses={courses} setCourses={setCourses} />
				</Route>
				<Route path='/courses/:id'>
					<CourseInfo />
				</Route>
				<Route path='/courses'>
					<Courses />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
