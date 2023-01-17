import data from '../data/courses';
import Course from './Course';
import '../App.css';

function Courses() {
	return (
		<>
			<h1>Courses:</h1> <br />
			<div className='courses'>
				{data.map((course) => (
					<Course data={course} key={course.id} />
				))}
			</div>
		</>
	);
}

export default Courses;
