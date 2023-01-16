import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contacts from './Components/Contacts';
import NotFound from './Components/NotFound';
import MainLayout from './Layouts/MainLayout';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<div className='container'>
					<Routes>
						<Route path='/' element={<MainLayout />}>
							<Route index element={<Home />} />
							<Route path='about' element={<About />} />
							<Route path='contacts' element={<Contacts />} />
							<Route path='*' element={<NotFound />} />
						</Route>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
