import { useState } from 'react';
import {
	Box,
	Chip,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TablePagination
} from '@mui/material';

import UserAvatar from '../avatar/UserAvatar';

const dummyData = [ // TODO: remove later
	{
		id: 101,
		title: 'Task 1',
		user: { name: 'Marko Markovic', id: 221, src: 'https://randomuser.me/api/portraits/men/73.jpg' },
		deadline: new Date().toLocaleString().split(',')[0],
		statusT: 1
	},
	{ id: 1021, title: 'Task 3 sdasdasd', user: { name: 'Janko Jankovic', id: 222 }, deadline: new Date().toLocaleString().split(',')[0], statusT: 2 },
	{
		id: 1011,
		title: 'Task 4',
		user: { name: 'Jovana Jovanovic', id: 223, src: 'https://randomuser.me/api/portraits/women/31.jpg' },
		deadline: new Date().toLocaleString().split(',')[0],
		statusT: 3
	},
	{
		id: 1301,
		title: 'Task sdsadasd sdasadasd',
		user: { name: 'Ljubo Kobas', id: 224 },
		deadline: new Date().toLocaleString().split(',')[0],
		statusT: 0
	},
	{ id: 102416, title: 'Task asdsadsad', user: { name: 'Jovan Jovanovic', id: 225 }, deadline: new Date().toLocaleString().split(',')[0], statusT: 4 },
	{ id: 104215, title: 'Task asdsadsad', user: { name: 'Petar Petrovic', id: 225 }, deadline: new Date().toLocaleString().split(',')[0], statusT: 4 },
	{ id: 104314, title: 'Task asdsadsad', user: { name: 'Pero Peric', id: 225 }, deadline: new Date().toLocaleString().split(',')[0], statusT: 4 },
	{ id: 140413, title: 'Task asdsadsad', user: { name: 'Marko Markovic', id: 225 }, deadline: new Date().toLocaleString().split(',')[0], statusT: 4 },
	{ id: 1220412, title: 'Task asdsadsad', user: { name: 'Nikola Nikola', id: 225 }, deadline: new Date().toLocaleString().split(',')[0], statusT: 4 },
	{ id: 1016412, title: 'Task asdsadsad', user: { name: 'Test name', id: 225 }, deadline: new Date().toLocaleString().split(',')[0], statusT: 4 },
	{ id: 1204118, title: 'Task asdsadsad', user: { name: 'Name shit', id: 225 }, deadline: new Date().toLocaleString().split(',')[0], statusT: 4 },
	{ id: 44, title: 'Task asdsadsad', user: { name: 'Johan all', id: 225 }, deadline: new Date().toLocaleString().split(',')[0], statusT: 4 },
	{ id: 1073419, title: 'Task asdsadsad', user: { name: 'Jovo Bar', id: 225 }, deadline: new Date().toLocaleString().split(',')[0], statusT: 4 },
	{ id: 10123441, title: 'Task asdsadsad', user: { name: 'Marsal Peter', id: 225 }, deadline: new Date().toLocaleString().split(',')[0], statusT: 4 },
	{ id: 101234101, title: 'Task asdsadsad', user: { name: 'Johna Hill', id: 225 }, deadline: new Date().toLocaleString().split(',')[0], statusT: 4 },
	{ id: 10123411, title: 'Task asdsadsad', user: { name: 'Margaret Roby', id: 225 }, deadline: new Date().toLocaleString().split(',')[0], statusT: 4 }
];

const status = {
	0: {
		name: 'No status',
		color: 'default'
	},
	1: {
		name: 'Not started',
		color: 'secondary'
	},
	2: {
		name: 'In progress',
		color: 'primary',
	},
	3: {
		name: 'Review',
		color: 'warning'
	},
	4: {
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

	let child = null;

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

			break;
	}
};

export const getTableRows = (type, rows) =>
{
	if (!checkGridType(type))
	{
		return <TableRow/>
	}

	return rows.map(row =>

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
				<Chip color={ status[row.statusT].color }
					  label={ status[row.statusT].name }
					  sx={ {
						  width: 100
					  } }/>
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
						name: row.user.name,
						src: row.user.src
					} }
								sx={ {
									width: 44,
									height: 44
								} }/>

					<Box
						container={ 'span' }>
						{ row.user.name }
					</Box>
				</Box>
			</TableCell>
		</TableRow>
	);
}

const Grid = ({ gridType = 'tasks' }) =>
{
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const slicedData = dummyData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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
			count={dummyData.length}
			rowsPerPage={rowsPerPage}
			page={page}
			onPageChange={handleChangePage}
			onRowsPerPageChange={handleChangeRowsPerPage}
		/>
	</TableContainer>

};

export default Grid;