import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import data from '../data/courses';
import Course from './Course';
import '../App.css';
import { useEffect } from 'react';
import SortSelect from './SortSelect';

function Courses() {
	const location = useLocation();
	const search = queryString.parse(location.search);
	const sortedByParams = ['price', 'title', 'slug', 'id'];
	const [_, setSearchParams] = useSearchParams(search);
	const navigate = useNavigate();

	useEffect(() => {
		const [key] = Object.keys(search); // key of query-string param
		const isCorrectQueryValue = !!sortedByParams.find(
			(el) => el === search.sort
		);
		const isMistakeQueryString =
			(!!key && key !== 'sort') || (!!search?.sort && !isCorrectQueryValue);
		if (isMistakeQueryString) {
			// navigate to courses if query-string with mistakes
			navigate('../courses', { relative: 'path' });
		} else {
			const select = document.getElementById('selectSort');
			select.value = !!search.sort ? search.sort : 'none';
		}
	}, [search, navigate]);

	const onChangeSortHandler = (e) => {
		const option = e.target.value;
		if (option === 'none') return setSearchParams();
		const stringified = queryString.stringify({ sort: option });
		setSearchParams(stringified);
	};

	return (
		<>
			<h1>Courses:</h1>
			<SortSelect
				sortByData={sortedByParams}
				queryString={search}
				onChangeSelect={onChangeSortHandler}
			/>
			<br />
			<div className='courses'>
				{data.map((course) => (
					<Course data={course} key={course.id} />
				))}
			</div>
		</>
	);
}

export default Courses;
