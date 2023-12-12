import {Box, Chip, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {uiActions} from '../../../../store/slices/uiSlice';

const colors = {
	'users': 'info',
	'teams': 'warning',
	'tasks': 'success'

}
const SearchRecord = ({data}) =>
{
	const nav = useNavigate();
	const dispatch = useDispatch();

	return <Box
		onClick={() =>
		{
			nav(`/${data?.type}?id=1`);

			dispatch(uiActions.setSearchOpen(false));
		}}
		sx={{

			padding: '24px',
			border: '0px solid grey',
			borderTopWidth: '1px',
			cursor: 'pointer',
			':hover': {
				'h6': {
					color: 'primary.main'
				}
			},
			':active': {
				'h6': {
					color: 'secondary.main'
				}
			}
		}}>

		< Box sx={{
			display: 'flex',
			gap: 1,
			// flexWrap: 'true'
		}}>
			<Chip label={'#' + data?.type ?? 'Record'}
				  color={colors[data?.type]}
				  sx={{
					  textTransform: 'capitalize',
					  color: '#ffffff',
					  fontWeight: 'bold'
				  }}/>

			<Typography variant={'h6'}
						sx={{
							fontWeight: 'bold'
						}}>
				{data?.title}
			</Typography>
		</Box>

		<Typography variant={'body1'}
					sx={{
						marginTop: 2,
						padding: '0px 12px'
					}}>
			{data?.about}
		</Typography>
	</Box>
};

export default SearchRecord;