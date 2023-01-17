import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './Components/Home';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Courses from './Components/Courses';
import SingleCourse from './Components/SingleCourse';
import NotFound from './Components/NotFound';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<div className='container'>
					<Routes>
						<Route path='https://dead-reaven.github.io/react-router-project/' element={<MainLayout />}>
							<Route index element={<Home />} />
							<Route path='about' element={<About />} />
							<Route path='contacts' element={<Contacts />} />
							<Route path='courses' element={<Courses />}></Route>
							<Route path='/courses/:slug' element={<SingleCourse />} />
							<Route path='*' element={<NotFound />} />
						</Route>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
