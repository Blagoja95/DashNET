import {TableCell, TableRow, TextField} from '@mui/material';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {updateTaskValuePatch} from '../../../../../../store/controllers/taskController';

const TypeRow = ({tkn, task, id}) =>
{
	const [edit, setEdit] = useState(false);
	const dispatch = useDispatch();

	const handleKey = (e) =>
	{
		if(e.keyCode === 13)
		{
			handleSave(e);
		}
	};

	const handleSave = (e) =>
	{
		if(e.target.value !== task.ttype)
		{
			dispatch(updateTaskValuePatch(tkn, id, 'ttype', e.target.value));
		}

		setEdit(false);
	};

	return <TableRow onClick={(e) => setEdit(!edit)}>
		<TableCell>
			Type
		</TableCell>
		<TableCell >
			{edit ? <TextField autoFocus size={'small'} defaultValue={task.ttype} onBlur={handleSave} onKeyDown={handleKey}/> : task.ttype}
		</TableCell>
	</TableRow>
};

export default TypeRow;