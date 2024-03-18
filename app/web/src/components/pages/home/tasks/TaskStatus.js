import { Chip } from '@mui/material';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskStatus } from '../../../../store/controllers/taskController';

const TaskStatus = ({ taskId }) => {
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

	function updateStatus(event) {
		event.preventDefault();
		dispatch(updateTaskStatus(taskId, btoken));
	}
	return (
		<Chip
			color={statuses.current[taskId].color}
			label={statuses.current[taskId].name}
			sx={{ width: 100 }}
			onClick={updateStatus}
		/>
	);
};
export default TaskStatus;
