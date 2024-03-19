import { Chip } from '@mui/material';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskStatus } from '../../../../store/controllers/taskController';

const TaskStatus = ({ statusId, taskId }) => {
	const dispatch = useDispatch();
	const btoken = useSelector(state => state.user.btoken);

	const statuses = useRef([
		{
			name: 'Not started',
			color: 'secondary'
		},
		{
			name: 'In progress',
			color: 'primary'
		},
		{
			name: 'Review',
			color: 'warning'
		},
		{
			name: 'Done',
			color: 'success'
		}
	]);

	function updateStatus() {
		dispatch(updateTaskStatus(taskId, btoken));
	}
	return (
		<Chip
			color={statuses.current[statusId].color}
			label={statuses.current[statusId].name}
			sx={{ width: 100 }}
			onClick={updateStatus}
		/>
	);
};
export default TaskStatus;
