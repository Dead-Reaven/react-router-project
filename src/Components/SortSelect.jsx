import React from 'react';

function SortSelect(props) {
	const { SORT_KEYS, sortKey, onChangeSelect } = props;
	const options = SORT_KEYS.map((param) => (
		<option key={param}>{param}</option>
	));
	return (
		<div className='sort'>
			<h2>
				{!!SORT_KEYS.includes(sortKey)
					? `Sorted by ${sortKey}`
					: 'Choose sort option'}
			</h2>

			<select
				value={!!SORT_KEYS.includes(sortKey) ? sortKey : 'none'}
				onChange={(e) => onChangeSelect(e)}
			>
				<option>none</option>
				{options}
			</select>
		</div>
	);
}

export default SortSelect;
