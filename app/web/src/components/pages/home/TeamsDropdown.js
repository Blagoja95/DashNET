import { Autocomplete, Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { teamActions } from '../../../store/slices/teamSlice';

const TeamsDropdown = () => {
	const dispatch = useDispatch();
	const teams = useSelector((state) => state.team.teams);
	const selectedTeam = useSelector((state) => state.team.selectedTeam);

	function onChangeHandler(event, val) {
		dispatch(teamActions.setSelectedTeam(val));
		dispatch(teamActions.setTeamStats(null));
		dispatch(teamActions.setTeamTasks([]));
	}

	return (
		<Box
			sx={{
				p: '1rem 1rem 0 1rem',
				display: 'flex',
				justifyContent: 'flex-end'
			}}
		>
			{/* TODO: Put this inside of My Tasks route when created */}
			{/* <Tooltip title={`Create a new Task for the selected team${value?.label && value.label.length > 0 ? ": " + value.label + "." : "."}`}>
			<Button onClick={controller.createTaskRedirect}>
				<AddCircle fontSize="small"/>
			</Button>
		</Tooltip> */}

			<Autocomplete
				disablePortal
				id='combo-box-teams'
				value={selectedTeam}
				options={teams}
				sx={{ width: 300 }}
				onChange={onChangeHandler}
				renderInput={(params) => <TextField {...params} label='Active Team' />}
				isOptionEqualToValue={(option, value) => option.id === value.id}
			/>
		</Box>
	);
};

export default TeamsDropdown;
