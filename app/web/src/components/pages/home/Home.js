import { Box } from '@mui/material';

import TeamCard from './cards/TeamCard';
import InfoCard from './cards/InfoCard';

import TeamsDropdown from './TeamsDropdown';
import TasksGrid from './tasks/TasksGrid';

const Home = () => {
	return (
		<Box
			component='main'
			sx={{ display: 'flex', gap: 5, flexDirection: 'column', justifyItems: 'center', flexWrap: 'wrap' }}>
			<TeamsDropdown />
			<Box component='section' sx={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
				<TeamCard />
				<InfoCard />
			</Box>
			<TasksGrid />
		</Box>
	);
};
export default Home;
