import { Link, useParams } from 'react-router-dom';
import '../App.css';
function Course({ data }) {
	const { title, body, slug, price, discount, id } = data;
	const params = useParams();

	return (
		<div className='course'>
			{!params.slug ? ( // if in courses pages or individual course page
				<Link to={slug}>
					<h2 className='link'>{title}</h2>
				</Link>
			) : (
				<h2 className='link'>{title}</h2>
			)}

			<p className='course-body'>{body}</p>
			<div className='footer-course '>
				<h2 className='slug '>{slug}</h2>
				{!!discount ? (
					<div>
						<p className='discount'>{price}$</p>
						<h2 className='price'>{price - discount}$</h2>
					</div>
				) : (
					<h2 className='price'>{price}$</h2>
				)}
			</div>
		</div>
	);
}

export default Course;
