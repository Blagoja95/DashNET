import dayjs from 'dayjs';
import {useDispatch} from 'react-redux';
import {TableCell, TableRow} from '@mui/material';
import {useState} from 'react';
import 'dayjs/locale/en-gb';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {updateTaskValuePatch} from '../../../../../../store/controllers/taskController';

const DeadlineRow = ({task, id, tkn}) =>
{
	const [value, setValue] = useState(dayjs(task.deadlineDate));
	const dispatch = useDispatch();

	const handleChange = (nval) =>
	{
		dispatch(updateTaskValuePatch(tkn, id, 'deadlineDate'
			, `${nval.$y}-${nval.$M < 10 ? '0' + (nval.$M + 1): (nval.$M + 1)}-${nval.$D < 10 ? '0' + nval.$D : nval.$D}`));

		setValue(nval);
	}

	return <TableRow>
		<TableCell>
			Deadline
		</TableCell>
		<TableCell>
			<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en-gb'}>
					<DatePicker value={value} onChange={handleChange}/>
			</LocalizationProvider>
		</TableCell>
	</TableRow>
};

export default DeadlineRow;