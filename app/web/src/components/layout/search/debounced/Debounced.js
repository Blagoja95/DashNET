import { useRef } from 'react';
import { TextField } from '@mui/material';

const DebounceInput = ({ handleDebounce, debounceTimeout = 500, label = 'Search for ...' }) =>
{
	const timerRef = useRef();

	const handleChange = (e) =>
	{
		if (timerRef.current)
		{
			clearTimeout(timerRef.current);
		}

		timerRef.current = setTimeout(() =>
		{
			if (handleDebounce && typeof handleDebounce === 'function')
			{
				handleDebounce(e.target.value);
			}
		}, debounceTimeout);
	};

	return <TextField fullWidth
					  label={ label }
					  autoFocus={ true }
					  onChange={ handleChange }
					  className={'search-bar'}/>;
};

export default DebounceInput;