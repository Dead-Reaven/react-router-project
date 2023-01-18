import React from 'react';

function SortSelect(props) {
	const { sortByData, queryString, onChangeSelect } = props;
	return (
		<div className='sort'>
			<h2>
				{!!queryString?.sort
					? !!sortByData.find((param) => param === queryString.sort)
						? `Sorted by ${queryString.sort}`
						: 'Choose sort option'
					: 'Choose sort option'}
			</h2>

			<select id='selectSort' onChange={(e) => onChangeSelect(e)}>
				<option>none</option>
				{sortByData.map((param) => (
					<option key={param}>{param}</option>
				))}
			</select>
		</div>
	);
}

export default SortSelect;
