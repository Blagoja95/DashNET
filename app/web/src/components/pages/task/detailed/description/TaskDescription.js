import {useDispatch, useSelector} from 'react-redux';
import {Box} from '@mui/material';
import {useRef, useState} from 'react';
import rehypeSanitize from 'rehype-sanitize';
import MDEditor, {commands} from '@uiw/react-md-editor';
import {updateTaskValuePatch} from '../../../../../store/controllers/taskController';

const TaskDescription = () =>
{
	const task = useSelector(state => state.task.loadedTask);
	const id = useSelector(state => state.task.taskId);
	const tkn = useSelector(state => state.user.btoken);

	const [editable, setEditable] = useState(false);
	const [value, setValue] = useState(task.description);

	const timerRef = useRef();
	const dispatch = useDispatch();

	const handleEditable = (e) =>
	{
		e.preventDefault();

		setEditable(true);

		handleSave(value, e);
	}

	const handleSave = (v) =>
	{
		setValue(v);

		if(timerRef.current)
		{
			clearTimeout(timerRef.current);
		}

		timerRef.current = setTimeout(() =>
		{
			if(v !== task.description)
			{
				dispatch(updateTaskValuePatch(tkn, id, 'description', value));
			}

			setEditable(false);
		}, 3000);
	};

	return task !== null
		   ? <Box
			   sx={{p: 2, cursor: 'pointer'}}
			   onClick={handleEditable}>

			   <MDEditor
				   style={{display: editable ? 'block' : 'none'}}
				   height={'100%'}
				   preview={'edit'}
				   autoFocus={true}
				   visibleDragbar={false}
				   value={value}
				   onChange={handleSave}
				   previewOptions={{
					   rehypePlugins: [[rehypeSanitize]],
				   }}
				   extraCommands={[commands.codeEdit, commands.codeLive]}
			   />

			   <MDEditor.Markdown source={value}
								  style={{whiteSpace: 'pre-wrap', display: !editable ? 'block' : 'none'}}/>
		   </Box>

		   : null;
};

export default TaskDescription;