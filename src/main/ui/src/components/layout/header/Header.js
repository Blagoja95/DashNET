import { useState, useRef, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Avatar, Typography, InputAdornment, TextField } from '@mui/material';
import UserAvatar from '../../ui/avatar/UserAvatar';

const Header = ({ titleTxt, subtitleTxt, hideSearchBar = false }) =>
{
	const [ isFocused, setFocused ] = useState(false);
	const inputRef = useRef(null);

	const inputWidth = isFocused ? 300 : 30;

	useEffect(() =>
	{
		if (isFocused && inputRef.current)
		{
			inputRef.current.focus();
		}
		else
		{
			inputRef.current.blur();
		}

	}, [ isFocused ]);

	return <Box
		component={ 'header' }
		sx={ {
			p: '1rem',
			display: 'flex',
			flexDirection: 'column'
		} }>

		<Box
			sx={ {
				display: 'flex',
				justifyContent: 'space-between'
			} }>

			<Typography variant='h3'
						sx={ {
							fontWeight: 'bold'
						} }>

				{ titleTxt?.length > 0 ? titleTxt : 'Dashboard' }
			</Typography>

			<Box
				sx={ {
					display: 'flex',
					alignItems: 'center',
					gap: 4
				} }>

				<TextField
					inputRef={ inputRef }
					sx={ {
						width: inputWidth,
						transition: 'width 0.3s ease-in-out',
						display: `${ hideSearchBar ? 'none' : 'block' }`
					} }
					InputProps={ {
						startAdornment: (
							<InputAdornment position='start'>
								<SearchIcon
									sx={ {
										cursor: 'pointer'
									} }/>
							</InputAdornment>
						),
					} }
					variant='standard'
					onClick={ () => setFocused(!isFocused) }
					onBlur={ () => setFocused(false) }
				/>

				<Box
					sx={ {
						cursor: 'pointer',
						border: '2px solid transparent',
						'&:hover': {
							border: '2px solid',
							borderRadius: '999999%'
						}
					} }
				onClick={() => console.log('User menu')}>
					<UserAvatar data={ { src: 'https://randomuser.me/api/portraits/lego/2.jpg' } }/>
				</Box>
			</Box>
		</Box>

		<Box>
			<Typography variant='subtitle1'
						sx={ {
							display: `${ ( subtitleTxt && subtitleTxt?.length > 0 ) ? 'block' : 'none' }`,
							color: 'white.main',
							marginTop: '1rem'
						} }>

				{ subtitleTxt?.length > 0 ? subtitleTxt : 'Subtitle' }
			</Typography>
		</Box>
	</Box>
};

export default Header;