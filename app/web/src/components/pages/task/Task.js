import {useDispatch, useSelector} from 'react-redux';
import Header from '../../layout/header/Header';
import {useEffect, useState} from 'react';
import {getTaskDetails} from '../../../store/controllers/taskController';
import {Box, Tab} from '@mui/material';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import UserAvatar from '../../ui/avatar/UserAvatar';
const Task = () =>
{
	const id = document.URL.split('/').pop();
	const task = useSelector(state => state.task.loadedTask);
	const tkn = useSelector(state => state.user.btoken);
	const dispatch = useDispatch();

	const [value, setValue] = useState('1');

	const handleChange = (event, newValue) =>
	{
		setValue(newValue);
	};

	useEffect(() =>
	{
		dispatch(getTaskDetails(id, tkn))
	}, [id]);

	console.log(task)
	return task !== null
		? <>
			<Header
				titleTxt={'#' + task.id + ': ' + task.title}
				subtitleTxt={`Created by ` + task.creatorId + ' Created on ' + task.createdDate}
			/>
			<Box sx={{ width: '100%', typography: 'body1' }}>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList onChange={handleChange} aria-label='lab API tabs example'>
							<Tab label='Description' value={'1'} />
							<Tab label='Details' value={'2'} />
							<Tab label='Comments' value={'3'} />
							<Tab label='History' value={'4'} />
						</TabList>
					</Box>
					<TabPanel value={'1'}>
						<Box sx={{color: 'red'}}> {task.description}</Box>
					</TabPanel>
					<TabPanel value={'2'}>
						<UserAvatar sx={null} data={{name: task.assagnedUser.fname + ' ' + task.assagnedUser.lname}} ref={null}/>
						{task.assagnedUser.fname + ' ' + task.assagnedUser.lname}
					</TabPanel>
					<TabPanel value={'3'}>Item Three</TabPanel>
				</TabContext>
			</Box>
		</>
		: null;
};

export default Task;