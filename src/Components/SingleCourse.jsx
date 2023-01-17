import { Link, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Course from './Course';
import data from '../data/courses';
import '../App.css';
import NotFound from './NotFound';

function SingleCourse() {
	const { slug } = useParams();
	const [course] = data.filter((el) => el.slug === slug);
	
	if (!course) return <NotFound />;

	return (
		<div>
			<Link to='..' relative='path'>
				<BsArrowLeft className='icoBackArrowLink' />
			</Link>
			<div className='courses singleCourse'>
				<Course data={course} />
			</div>
		</div>
	);
}

export default SingleCourse;
