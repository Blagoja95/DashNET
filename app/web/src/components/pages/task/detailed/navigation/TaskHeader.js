import Header from '../../../../layout/header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {TextField} from '@mui/material';
import {updateTaskValuePatch} from '../../../../../store/controllers/taskController';

const TaskHeader = () =>
{
	const task = useSelector(state => state.task.loadedTask);
	const tkn = useSelector(state => state.user.btoken);
	const id = useSelector(state => state.task.taskId);

	const [editable, setEditable] = useState(false);
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
		if(e.target.value !== task.title)
		{
			dispatch(updateTaskValuePatch(tkn, id, 'title', e.target.value));
		}

		setEditable(false);
	};

	return <Header onClick={() => setEditable(true)}
		subtitleTxt={`Created by ` + task.creatorUser.fname + ' ' + task.creatorUser.lname + ' Created on ' + task.createdDate}
		titleTxt={!editable ? '#' + task.id + ': ' + task.title
							: <TextField margin={'dense'} autoFocus onBlur={handleSave} onKeyDown={handleKey} defaultValue={task.title}/>}/>
};

export default TaskHeader;