import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import queryString from 'query-string';
import Course from './Course';
import SortSelect from './SortSelect';
import data from '../data/courses';
import '../App.css';

function Courses() {
	const location = useLocation();
	const search = queryString.parse(location.search);
	const [_, setSearchParams] = useSearchParams(search);
	const navigate = useNavigate();
	const sortedByParams = ['price', 'title', 'slug', 'id'];

	const checkQueryString = () => {
		const [key] = Object.keys(search); // key of query-string param
		const isCorrectQueryValue = !!sortedByParams.find(
			(el) => el === search.sort
		);
		const isMistakeQueryString = // check on mistakes queryString
			(!!key && key !== 'sort') || (!!search?.sort && !isCorrectQueryValue);
		return isMistakeQueryString;
	};

	useEffect(() => {
		if (checkQueryString()) navigate('../courses', { relative: 'path' });
		// navigate to courses if query-string with mistakes

		const select = document.getElementById('selectSort');
		select.value = !!search.sort ? search.sort : 'none';
	}, [search, navigate]);

	const getCourses = (courses) =>
		courses.map((course) => <Course data={course} key={course.id} />);

	const getSortedData = (sortBy) => {
		// check what typy of value we want to sort
		const parsedData = JSON.parse(JSON.stringify(data));
		const typeSortBy = typeof parsedData[0][sortBy];
		if (typeSortBy === 'number')
			return parsedData.sort((a, b) => a[sortBy] - b[sortBy]);
		if (typeSortBy === 'string')
			return parsedData.sort((a, b) => {
				// ignore upper and lowercase
				const keyA = a[sortBy].toUpperCase();
				const keyB = b[sortBy].toUpperCase();
				if (keyA < keyB) return -1;
				if (keyA > keyB) return 1;
				// else names must be equal
				return 0;
			});

		return parsedData;
	};

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
				{getCourses(getSortedData(search.sort))}
				{/* {!checkQueryString() // if has`n mistakes in QS
					? getCourses(getSortedData(search.sort))
					: getCourses(data)} */}
			</div>
		</>
	);
}

export default Courses;
