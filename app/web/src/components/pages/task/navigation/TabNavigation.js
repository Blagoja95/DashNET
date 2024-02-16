import {Box, Tab} from '@mui/material';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import {useState} from 'react';
import TaskDescription from '../description/TaskDescription';
import TaskOverview from '../overview/TaskOverview';

const TabNavigation = () =>
{
	const [value, setValue] = useState('1');

	const handleChange = (event, newValue) =>
	{
		setValue(newValue);
	};

	return <TabContext value={value}>
		<Box sx={{
			borderBottom: 1,
			borderColor: 'divider',
			mt: 8,
			mb: 2
		}}>

			<TabList onChange={handleChange}>
				<Tab label='Description' value={'1'}/>
				<Tab label='Overview' value={'2'}/>
				<Tab label='Comments' value={'3'}/>
				<Tab label='History' value={'4'}/>
			</TabList>
		</Box>

		<TabPanel value={'1'}>
			<TaskDescription/>
		</TabPanel>

		<TabPanel value={'2'}>
			<TaskOverview/>
		</TabPanel>

		<TabPanel value={'3'}>
			Comments TODO
		</TabPanel>

		<TabPanel value={'4'}>
			History TODO
		</TabPanel>
	</TabContext>
};

export default TabNavigation;