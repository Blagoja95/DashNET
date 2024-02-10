import { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableContainer, TableHead, TablePagination } from '@mui/material';
import { useSelector } from 'react-redux';
import GridController from "./GridController";

	const Grid = ({ gridType = 'tasks', teamId }) =>
	{
		const rowsPerPageOptions = [ 5, 10, 25 ];
		const [ page, setPage ] = useState(0);
		const [ rowsPerPage, setRowsPerPage ] = useState(rowsPerPageOptions[0]);

		const controller = GridController();

		useEffect(() =>
		{
			controller.getData(teamId);
		}, [ teamId ]);

		const handleChangePage = (event, newPage) =>
		{
			setPage(newPage);
		};

		const handleChangeRowsPerPage = event =>
		{
			setRowsPerPage(parseInt(event.target.value, 10));
			setPage(0);
		};

		const data = useSelector(state => state.team.teamTasks);

		const slicedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

		return <TableContainer
			component={ Paper }
			sx={ {
				minHeight: 500,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between'
			} }>

			<Table>
				<TableHead>
					{ controller.getTableHeader(gridType) }
				</TableHead>

				<TableBody>
					{ controller.getTableRows(gridType, slicedData) }
				</TableBody>
			</Table>

			<TablePagination
				rowsPerPageOptions={ rowsPerPageOptions }
				component='div'
				count={ data.length }
				rowsPerPage={ rowsPerPage }
				page={ page }
				onPageChange={ handleChangePage }
				onRowsPerPageChange={ handleChangeRowsPerPage }
			/>
		</TableContainer>
	};

	export default Grid;