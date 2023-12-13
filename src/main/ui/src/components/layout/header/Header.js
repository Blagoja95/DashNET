import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography, Button } from '@mui/material';
import UserAvatar from '../../ui/avatar/UserAvatar';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../store/slices/uiSlice';

const Header = ({ titleTxt, subtitleTxt }) =>
{
	const dispatch = useDispatch();

	return <Box
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
				<Button
					onClick={ () =>  dispatch(uiActions.setSearchOpen(true))}>
					<SearchIcon
						color={ 'primary' }
						sx={ {
							cursor: 'pointer'
						} }/>
				</Button>

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