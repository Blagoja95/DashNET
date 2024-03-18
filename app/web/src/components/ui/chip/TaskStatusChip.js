import {Chip} from '@mui/material';
import axios from 'axios';
import {teamActions} from '../../../store/slices/teamSlice';
import {useDispatch, useSelector} from 'react-redux';
import {taskActions} from '../../../store/slices/taskSlice';

const TaskStatusChip = ({id, btoken, statusVal}) =>
{
	const dispatch = useDispatch();
	const statusDef = useSelector(state => state.task.statusDefinition);

	const changeStatus = (e, id) =>
	{
		e.stopPropagation();

		axios.patch('http://localhost:8080/tasks/update/status/ow',
			JSON.stringify({id: id}),
			{
				headers: {
					'Authorization': `Bearer ${btoken}`,
					'Content-Type': 'application/json'
				}
			})
			.then(res =>
			{
				if (res.status === 200 && res.data.status)
				{
					console.log()
					dispatch(teamActions.setTaskStatus(res.data.data));
					dispatch(taskActions.updatedLoadedTask(['status', res.data.data.status]));
				}
			})
			.catch(e => console.warn(e));
	};

	return <Chip color={statusDef[statusVal].color}
				 label={statusDef[statusVal].name}
				 id={'status-chip-id-' + id}
				 sx={{
					 width: 100
				 }}
				 onClick={(e) => changeStatus(e, id ?? -1)}
	/>
};

export default TaskStatusChip;