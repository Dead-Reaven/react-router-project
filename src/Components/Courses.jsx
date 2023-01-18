import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import queryString from 'query-string';
import Course from './Course';
import SortSelect from './SortSelect';
import data from '../data/courses';
import '../App.css';

const SORT_KEYS = ['price', 'title', 'slug', 'id'];

const getSortedCourses = (sortBy) => {
	console.log(!SORT_KEYS.includes(sortBy))
	if (  !SORT_KEYS.includes(sortBy)) return data;
	const parsedData = [...data];
	parsedData.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
	return parsedData;
};

function Courses() {
	const location = useLocation();
	const search = queryString.parse(location.search);
	const [sortKey, setSortKey] = useState(search.sort);
	const [_, setSearchParams] = useSearchParams(search);
	const navigate = useNavigate();

	useEffect(() => {
		if (!SORT_KEYS.includes(sortKey)) {
			navigate('../courses', { relative: 'path' });
			setSortKey();
		}
	}, [sortKey, navigate]);

	const getCourses = (courses) =>
		courses.map((course) => <Course data={course} key={course.id} />);

	const onChangeSortHandler = (e) => {
		const option = e.target.value;
		if (!SORT_KEYS.includes(option)) return setSortKey();
		const stringified = queryString.stringify({ sort: option });
		setSortKey(option);
		setSearchParams(stringified);
	};

	return (
		<>
			<h1>Courses:</h1>
			<SortSelect
				SORT_KEYS={SORT_KEYS}
				sortKey={sortKey}
				onChangeSelect={onChangeSortHandler}
			/>
			<br />
			<div className='courses'>{getCourses(getSortedCourses(sortKey))}</div>
		</>
	);
}

export default Courses;
