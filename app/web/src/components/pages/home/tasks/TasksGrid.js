import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksByTeam } from '../../../../store/controllers/taskController';
import TaskStatus from './TaskStatus';
import { Link } from 'react-router-dom';

const TasksGrid = () => {
	const dispatch = useDispatch();

	const btoken = useSelector((state) => state.user.btoken);
	const teamId = useSelector((state) => state.team.selectedTeam.id);
	const tasks = useSelector((state) => state.team.teamTasks);

	useEffect(() => {
		dispatch(getTasksByTeam(teamId, btoken));
	}, [dispatch, btoken, teamId]);
	return (
		<TableContainer
			component={Paper}
			sx={{
				minHeight: 500,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between'
			}}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Task</TableCell>
						<TableCell>Deadline</TableCell>
						<TableCell>Status</TableCell>
						<TableCell>Assigned to</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{tasks.map((task) => (
						<TableRow key={task.id} component={Link} to={`task/${task.id}`} sx={{ textDecoration: 'none' }}>
							<TableCell sx={{ fontWeight: 'bold' }}>{task.title}</TableCell>
							<TableCell>{task.deadlineDate}</TableCell>
							<TableCell>
								<TaskStatus taskId={task.status} />
							</TableCell>
							<TableCell>
								{task.assagnedUser.fname} {task.assagnedUser.lname}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
export default TasksGrid;
