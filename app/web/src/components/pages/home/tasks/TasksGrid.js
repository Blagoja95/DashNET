import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksByTeam } from '../../../../store/controllers/taskController';
import TaskStatus from './TaskStatus';
import { Link } from 'react-router-dom';
import UserAvatar from '../../../ui/avatar/UserAvatar';

const TasksGrid = () => {
	const dispatch = useDispatch();

	const btoken = useSelector((state) => state.user.btoken);
	const teamId = useSelector((state) => state.team.selectedTeam.id);
	const tasks = useSelector((state) => state.team.teamTasks);

	const [ page, setPage ] = useState(0);
	const [ rowsPerPage, setRowsPerPage ] = useState(5);

	const handleChangeRowsPerPage = event =>
	{
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

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
						<TableRow key={task.id} hover>
							<TableCell>
								<Typography
									variant='subtitle2'
									component={Link}
									to={`task/${task.id}`}
									sx={{ textDecoration: 'none', color: 'white.light', fontWeight: 'bold'}}>
									{task.title}
								</Typography>
							</TableCell>
							<TableCell>{task.deadlineDate}</TableCell>
							<TableCell>
								<TaskStatus statusId={task.status} taskId={task.id} />
							</TableCell>
							<TableCell sx={{display: 'flex', alignItems: 'center', gap: 5}}>
								<UserAvatar /> {task.assagnedUser.fname} {task.assagnedUser.lname}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<TablePagination
				rowsPerPageOptions={ [5, 10, 25]}
				component='div'
				count={ tasks.length }
				rowsPerPage={ rowsPerPage }
				page={ page }
				onPageChange={ newPage => setPage(newPage) }
				onRowsPerPageChange={ handleChangeRowsPerPage }
			/>
		</TableContainer>
	);
};
export default TasksGrid;
