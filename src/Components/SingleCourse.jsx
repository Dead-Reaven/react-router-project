import { Link, useParams } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs'
import Course from './Course';
import data from '../data/courses';
import '../App.css';

function SingleCourse() {
	const { slug } = useParams();
	const [course] = data.filter((el) => el.slug === slug);
	return (
		<div>
			<Link to='/courses'>
				<BsArrowLeft className='icoBackArrowLink'/>
			</Link>
			{!!course ? (
				<div className='courses singleCourse'>
					<Course
						title={course.title}
						body={course.body}
						slug={course.slug}
						price={course.price}
						discount={course.discount}
						id={course.id}
					/>
				</div>
			) : (
				<h1>Course is not found(</h1>
			)}
		</div>
	);
}

export default SingleCourse;
