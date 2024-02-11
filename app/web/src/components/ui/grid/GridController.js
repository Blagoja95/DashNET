import axios from 'axios';
import { teamActions } from '../../../store/slices/teamSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Chip, TableCell, TableRow } from '@mui/material';
import UserAvatar from '../avatar/UserAvatar';
import { useNavigate } from 'react-router-dom';

const HomeController = () =>
{
	const nav = useNavigate();
	const dispatch = useDispatch();

	const btoken = useSelector(state => state.user.btoken);
	const status = useSelector(state => state.task.statusDefinition);

	const getData = async (teamId) =>
	{
		axios.get('http://localhost:8080/tasks/team/' + ( teamId ?? -1 ),
			{ headers: { 'Authorization': `Bearer ${ btoken }` } })
			 .then(res =>
			 {
				 if (res.status === 200 && res.data.status)
				 {
					 dispatch(teamActions.setTeamTasks(res.data.data));
				 }
			 })
			 .catch(e => dispatch(teamActions.setTeamTasks([])));
	};

	const _handleClick = (id) => nav('task/' + id);

	const changeStatus = (e, id) =>
	{
		e.stopPropagation();

		axios.patch('http://localhost:8080/tasks/update/status/ow',
			JSON.stringify({ id: id }),
			{
				headers: {
					'Authorization': `Bearer ${ btoken }`,
					'Content-Type': 'application/json'
				}
			})
			 .then(res =>
			{
				if (res.status === 200 && res.data.status)
				{
					dispatch(teamActions.setTaskStatus(res.data.data));
				}
			})
			 .catch(e => console.warn(e));
	}

	const _checkGridType = (input) =>
	{
		if (!input || typeof input !== 'string')
		{
			return false
		}

		const gridTypes = new Set([
			'tasks',
			'teams',
			'users'
		]);

		return gridTypes.has(input);
	};

	const getTableHeader = (type) =>
	{
		if (!_checkGridType(type))
		{
			return <TableRow/>
		}

		switch (type)
		{
			case 'tasks':
				return <TableRow>
					<TableCell align='left'>
						Task
					</TableCell>

					<TableCell align='left'>
						Deadline
					</TableCell>

					<TableCell align='left'>
						Status
					</TableCell>

					<TableCell>
						Assigned to
					</TableCell>
				</TableRow>

			default:
				break;
		}
	};

	const getTableRows = (type, rows) =>
	{
		if (!_checkGridType(type))
		{
			return <TableRow/>
		}

		return rows.map((row, i) =>
		{
			const fullName = row.assagnedUser.fname + ' ' + row.assagnedUser.lname;

			return <TableRow
				hover
				key={ row.id + '-task-' + row.title }
				sx={ { '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' } }
				onClick={() => _handleClick(row?.id ?? -1)}
			>
				<TableCell align='left' sx={ {
					fontWeight: 'bold'
				} }>
					{ row.title }
				</TableCell>


				<TableCell
					align='left'>
					{ row.deadlineDate }
				</TableCell>

				<TableCell align='left'
							onClick={e => e.stopPropagation()}>
					<Chip color={ status[row.status].color }
						  label={ status[row.status].name }
						  id={'status-chip-id-' + row?.id}
						  sx={ {
							  width: 100
						  } }
						  onClick={(e)=> changeStatus(e, row?.id ?? -1)}
					/>
				</TableCell>

				<TableCell>
					<Box
						sx={ {
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							gap: 3
						} }>
						<UserAvatar data={ {
							name: fullName,
							src: row.assagnedUser?.src ?? ''
						} }
									sx={ {
										width: 44,
										height: 44
									} }/>

						<Box
							container={ 'span' }>
							{ fullName }
						</Box>
					</Box>
				</TableCell>
			</TableRow>
		});
	}

	return {
		getData,
		getTableHeader,
		getTableRows,
		changeStatus
	};
};

export default HomeController;