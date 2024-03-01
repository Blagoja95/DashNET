import {Box, Button, Typography} from '@mui/material';
import InputGroup from '../../../ui/InputGroup';
import MDEditor, {commands} from '@uiw/react-md-editor';
import {useState} from 'react';
import {Label} from '@mui/icons-material';

const NewTaskForm = ({ntaskRef, handleCreate}) =>
{
	const [value, setValue] = useState('');

	const handleChange = (val) =>
	{
		setValue(val);

		ntaskRef.current.description = val;
	};

	return <Box sx={{bgcolor: 'grey.main', borderRadius: 1, border: 2, borderColor: 'grey.light', px: 5, pb: 2, mt: 5}}>
			<Box component='form' sx={{mt: 5}}>
				<Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
					<InputGroup label='Title' type='text' inpRef={el => ntaskRef.current.title = el?.value}/>
					<InputGroup label='Type' type='text' inpRef={el => ntaskRef.current.type = el?.value}/>

					<Typography>Description</Typography>
					<MDEditor
						preview={'edit'}
						autoFocus={true}
						value={value}
						onChange={handleChange}
						extraCommands={[commands.codeEdit, commands.codePreview]}
					/>

					<Box sx={{
						display: 'flex',
						justifyContent: 'center'
					}}>
					<Button type='submit'
							variant={'contained'}
							sx={{p: 1, my: 3, width: 200, borderRadius: 1}}
							onClick={handleCreate}>
						Create
					</Button>
					</Box>
				</Box>
			</Box>
	</Box>
};

export default NewTaskForm;