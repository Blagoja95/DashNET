import { Chip, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const dummyData = [ // TODO: remove later
	{ id: 101, title: 'Task 1', user: { name: 'Marko Markovic', id: 221 }, deadline: '11.12.23', statusT: 1 },
	{ id: 1021, title: 'Task 3 sdasdasd', user: { name: 'Janko Jankovic', id: 222 }, deadline: '11.12.23', statusT: 2 },
	{ id: 1011, title: 'Task 4', user: { name: 'Branko Brankovic', id: 223 }, deadline: '11.12.23', statusT: 3 },
	{
		id: 1301,
		title: 'Task sdsadasd sdasadasd',
		user: { name: 'Ljubo Kobas', id: 224 },
		deadline: '11.12.23',
		statusT: 0
	},
	{ id: 1041, title: 'Task asdsadsad', user: { name: 'Petar Petrovic', id: 225 }, deadline: '11.12.23', statusT: 1 },
];

const status = {
	0: {
		name: 'No status',
		color: 'warning'
	},
	1: {
	name: 'ToDo',
		color: 'info'
	},
	2: {
		name: 'In progress',
		color: 'secondary',
	},
	3: {
		name: 'Done',
		color: 'success'
	}
};

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
				<TableCell>
					Assigned to
				</TableCell>

				<TableCell align="left">
					Deadline
				</TableCell>

				<TableCell align="left">
					Task
				</TableCell>

				<TableCell align="left">
					Status
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
			<TableCell component="th" scope="row">
				{ row.user.name }
			</TableCell>

			<TableCell align="left">
				{ row.deadline }
			</TableCell>

			<TableCell align="left">
				{ row.title }
			</TableCell>

			<TableCell align="left">
			</TableCell>
		</TableRow>
	);
}

const Grid = ({ gridType = 'tasks' }) =>
{

	return <TableContainer /*component={Paper(1)}*/>
		<Table>
			<TableHead>
				{ getTableHeader(gridType) }
			</TableHead>

			<TableBody>
				{ getTableRows(gridType, dummyData) }
			</TableBody>
		</Table>
	</TableContainer>

};

export default Grid;