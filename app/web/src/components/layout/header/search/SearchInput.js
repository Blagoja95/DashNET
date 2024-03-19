import { useEffect, useRef, useState } from 'react';
import { TextField } from '@mui/material';

const SearchInput = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const timerRef = useRef();

	function handleChange(event) {
		if (timerRef.current)
			clearTimeout(timerRef.current);

		timerRef.current = setTimeout(() => {
			timerRef.current = null;
			setSearchTerm(event.target.value);
		}, 500);
	};

	useEffect(() => {
		console.log(searchTerm);
	}, [searchTerm])

	return <TextField fullWidth label='Search for Users, Teams, Tasks or more ...' onChange={handleChange} className='search-bar' />;
};
export default SearchInput;