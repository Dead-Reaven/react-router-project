import { useParams } from 'react-router-dom';
import data from '../data/courses';
import Course from './Course';
import '../App.css';

function Courses() {
	return (
		<>
			<h1>Courses:</h1> <br />
			<div className='courses'>
				{data.map((course) => (
					<Course
						title={course.title}
						body={course.body}
						id={course.id}
						slug={course.slug}
						price={course.price}
						discount={course.discount}
						key={course.id}
					/>
				))}
			</div>
		</>
	);
}

export default Courses;
