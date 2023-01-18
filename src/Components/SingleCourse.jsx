import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Course from './Course';
import data from '../data/courses';
import { useEffect } from 'react';
import '../App.css';

function SingleCourse() {
	const { slug } = useParams();
	const course = data.find((el) => el.slug === slug);
	const navigate = useNavigate();
	useEffect(() => {
		// this function will be called every time when 'course' will be chenged
		//return user to relative link: /courses
		if (!course) navigate('..', { relative: 'path' });
	}, [course, navigate]);

	return (
		<div>
			<Link to='..' relative='path'>
				<BsArrowLeft className='icoBackArrowLink' />
			</Link>
			<div className='courses singleCourse'>
				<Course data={!!course && course} />
			</div>
		</div>
	);
}

export default SingleCourse;
