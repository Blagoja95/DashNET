import {TableCell, TableRow} from '@mui/material';
import TaskStatusChip from '../../../../ui/chip/TaskStatusChip';

const StatusRow = ({id, statusVal, tkn}) =>
{
	return <TableRow>
		<TableCell>
			Status
		</TableCell>
		<TableCell>
			<TaskStatusChip id={id} btoken={tkn} statusVal={statusVal}/>
		</TableCell>
	</TableRow>
};

export default StatusRow;