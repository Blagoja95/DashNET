import { Box, Chip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const colors = {
	'users' : 'info',
	'teams' : 'warning',
	'tasks' : 'success'

}
const SearchRecord = ({ data }) =>
{
	const nav = useNavigate();

	return <Box
		onClick={ () => nav(`/${ data?.type }?id=1`) }
		sx={ {
			':hove': {
				color: 'primary.main'
			},
			padding: '5px 24px'
		} }>

		<Box sx={ {
			display: 'fex',
			gap: 1
		} }>
			<Chip label={ '#' + data?.type ?? 'Record' }
				  color={colors[data?.type]}
			sx={{
				textTransform: 'capitalize'
			}}/>

			<Typography variant={'subtitle1'}>
				{data?.about}
			</Typography>
		</Box>

		<Typography variant={'body1'}>
			{data?.about}
		</Typography>
	</Box>
};

export default SearchRecord;