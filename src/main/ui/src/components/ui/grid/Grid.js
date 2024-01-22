import { useEffect, useState } from 'react';
import { Box, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';

import UserAvatar from '../avatar/UserAvatar';
import { useSelector } from "react-redux";

const dummyData = [ // TODO: remove later
	{ user: { name: 'Marko Markovic', id: 221, src: 'https://randomuser.me/api/portraits/men/73.jpg' }, statusT: 1 },
	{  user: { name: 'Janko Jankovic', id: 222 }, statusT: 2 },
	{  user: { name: 'Jovana Jovanovic', id: 223, src: 'https://randomuser.me/api/portraits/women/31.jpg' }, statusT: 3 },
	{   user: { name: 'Ljubo Kobas', id: 224 }, statusT: 0 },
	{   user: { name: 'Jovan Jovanovic', id: 225 }, statusT: 3 },
	{   user: { name: 'Petar Petrovic', id: 225 }, statusT: 3},
	{   user: { name: 'Pero Peric', id: 225 }, statusT: 3 },
	{   user: { name: 'Marko Markovic', id: 225 }, statusT: 1 },
	{  user: { name: 'Nikola Nikola', id: 225 }, statusT: 2 },
	{  user: { name: 'Test name', id: 225 }, statusT: 0 },
	{  user: { name: 'Name shit', id: 225 }, statusT: 0 },
	{  user: { name: 'Johan all', id: 225 }, statusT: 1 },
	{  user: { name: 'Jovo Bar', id: 225 }, statusT: 3 },
	{  user: { name: 'Marsal Peter', id: 225 }, statusT: 2 },
	{  user: { name: 'Johna Hill', id: 225 }, statusT: 2 },
	{  user: { name: 'Margaret Roby', id: 225 }, statusT: 3 }
];

const status = {
	0: {
		name: 'Not started',
		color: 'secondary'
	},
	1: {
		name: 'In progress',
		color: 'primary',
	},
	2: {
		name: 'Review',
		color: 'warning'
	},
	3: {
		name: 'Done',
		color: 'success'
	}
};

const rowsPerPageOptions = [5, 10, 25];

export const checkGridType = (input) =>
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

export const getTableHeader = (type) =>
{
	if (!checkGridType(type))
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

export const getTableRows = (type, rows) =>
{
	if (!checkGridType(type))
	{
		return <TableRow/>
	}

	return rows.map((row, i) =>

		<TableRow
			key={ row.id + '-task-' + row.title }
			sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
		>
			<TableCell align='left' sx={ {
				fontWeight: 'bold'
			} }>
				{ row.title }
			</TableCell>


			<TableCell
				align='left'>
				{ row.deadline }
			</TableCell>

			<TableCell align='left'>
				<Chip color={ status[row.status].color }
					  label={ status[row.status].name }
					  sx={ {
						  width: 100
					  } }/>
			</TableCell>

			<TableCell> {/* TODO: when users URI is available change this*/}
				<Box
					sx={ {
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						gap: 3
					} }>
					<UserAvatar data={ {
						name: dummyData[i].user.name,
						src: dummyData[i].user.src
					} }
								sx={ {
									width: 44,
									height: 44
								} }/>

					<Box
						container={ 'span' }>
						{ dummyData[i].user.name }
					</Box>
				</Box>
			</TableCell>
		</TableRow>
	);
}

const Grid = ({ gridType = 'tasks' , teamId, controller}) =>
{
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

	useEffect(() =>
	{
		controller.getTasks(teamId);
	}, [teamId]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const data = useSelector(state => state.team.teamTasks);
	const slicedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

	return <TableContainer
		component={ Paper }
	sx={{
		minHeight: 500,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	}}>

		<Table>
			<TableHead>
				{ getTableHeader(gridType) }
			</TableHead>

			<TableBody>
				{ getTableRows(gridType, slicedData) }
			</TableBody>
		</Table>

		<TablePagination
			rowsPerPageOptions={rowsPerPageOptions}
			component='div'
			count={data.length}
			rowsPerPage={rowsPerPage}
			page={page}
			onPageChange={handleChangePage}
			onRowsPerPageChange={handleChangeRowsPerPage}
		/>
	</TableContainer>
};

export default Grid;