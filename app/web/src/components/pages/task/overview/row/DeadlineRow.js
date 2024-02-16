import dayjs from 'dayjs';
import {useDispatch} from 'react-redux';
import {TableCell, TableRow} from '@mui/material';
import {useState} from 'react';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {updateTaskValuePatch} from '../../../../../store/controllers/taskController';

const DeadlineRow = ({task, id, tkn}) =>
{
	const [value, setValue] = useState(dayjs(task.deadlineDate));
	const dispatch = useDispatch();

	const handleChange = (nval) =>
	{
		console.log(`${nval.$y}-${nval.$M < 10 ? '0' + nval.$M : nval.$M}-${nval.$D < 10 ? '0' + nval.$M : nval.$M}`)
		dispatch(updateTaskValuePatch(tkn, id, 'deadlineDate', `${nval.$y}-${nval.$M}-${nval.$D}`));

		setValue(nval);
	}

	return <TableRow>
		<TableCell>
			Deadline
		</TableCell>
		<TableCell>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DemoContainer components={['DatePicker']}>
					<DatePicker label="Basic date picker" value={value} onChange={handleChange}/>
				</DemoContainer>
			</LocalizationProvider>
		</TableCell>
	</TableRow>
};

export default DeadlineRow;