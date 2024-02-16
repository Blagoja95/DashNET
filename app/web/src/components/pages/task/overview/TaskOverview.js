import {useDispatch, useSelector} from 'react-redux';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import TeamRow from './row/TeamRow';
import AssigneeRow from './row/AssigneeRow';
import TypeRow from './row/TypeRow';
import DeadlineRow from './row/DeadlineRow';
import StatusRow from './row/StatusRow';
import {deleteTask} from '../../../../store/controllers/taskController';
import {useNavigate} from 'react-router-dom';

const TaskOverview = () =>
{
	const task = useSelector(state => state.task.loadedTask);
	const id = useSelector(state => state.task.taskId);
	const team = useSelector(state => state.team.selectedTeam);
	const tkn = useSelector(state => state.user.btoken);

	const dispatch = useDispatch();
	const nav = useNavigate();

	return task !== null
		   ? <TableContainer component={ Paper } sx={{maxWidth: 1000}}>
			   <Table>
				   <TableBody>
					   <TypeRow task={task} tkn={tkn} id={id}/>
					   <StatusRow id={id} statusVal={task.status} tkn={tkn}/>
						<TeamRow team={team}/>
					   <AssigneeRow task={task}/>
					   <DeadlineRow id={id} task={task} tkn={tkn}/>

					   <TableRow>
						   <TableCell>
							   Delete this task
						   </TableCell>
						   <TableCell>
							   <Button color={"error"} onClick={() => dispatch(deleteTask(tkn, id, nav))}>
								   Delete
							   </Button>
						   </TableCell>
					   </TableRow>
				   </TableBody>
			   </Table>
		   </TableContainer>
		   : null;
};

export default TaskOverview;