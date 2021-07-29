import './App.css';
import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';
import { useEffect, useState } from 'react';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { Search } from './components/Search/Search';
import { Login } from './components/Login/Login';
import { Link, Route, Switch } from 'react-router-dom';
import { Registration } from './components/Registration/Registration';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import axios from 'axios';
import { API } from './config';

function App() {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/courses/all`)
			.then((response) => setCourses(response.data.result));
	}, []);

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
						<Courses courses={courses} />
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
