import { teamActions } from '../../../store/slices/teamSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HomeController = () =>
{
	const dispatch = useDispatch();
	const selectedTeam = useSelector(state => state.team.selectedTeam);
	const btoken = useSelector(state => state.user.btoken);
	const nav = useNavigate();

	const createTaskRedirect = () => nav('tasks/create/' + selectedTeam.id);

	const handeValChange = (e, val, reason) =>
	{
		if ( reason === 'selectOption' )
		{
			dispatch(teamActions.setSelectedTeam(val));
			dispatch(teamActions.setTeamStats(null));
			dispatch(teamActions.setTeamTasks([]));
		}
	};

	const getCount = async (teamId) =>
	{
		axios.get('http://localhost:8080/tasks/count/' + (teamId ?? -1),
			{ headers: {"Authorization" : `Bearer ${btoken}`} })
			 .then(res =>
			 {
				 if (res.status === 200 && res.data.status)
				 {
					 dispatch(teamActions.setTeamStats(res.data.data))
				 }
			 })
			 .catch(e => dispatch(teamActions.setTeamStats(null)));
	};

	return {
		createTaskRedirect,
		handeValChange,
		getCount
	}
}

export default HomeController;