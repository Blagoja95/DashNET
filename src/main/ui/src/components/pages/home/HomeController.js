import { teamActions } from "../../../store/slices/teamSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomeController = () =>
{
	const dispatch = useDispatch();
	const selectedTeam = useSelector(state => state.team.selectedTeam);
	const nav = useNavigate();

	const createTaskRedirect = () => nav('create/task?id=' + selectedTeam.id);

	const handeValChange = (e, val, reason) =>
	{
		if ( reason === 'selectOption' )
		{
			dispatch(teamActions.setSelectedTeam(val));

		}
	}

	const query = (id) =>
	{
		fetch()
	}

	return {
		createTaskRedirect,
		handeValChange
	}
}

export default HomeController;