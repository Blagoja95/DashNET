import {useSelector} from 'react-redux';
import Header from '../../layout/header/Header';
import Grid from '../../ui/grid/Grid';
import {Box} from '@mui/material';
import TeamCard from './hcards/TeamCard';
import InfoCard from './hcards/InfoCard';
import HomeController from './HomeController';
import TeamHeader from './teamHeader/TeamHeader';

const Home = () =>
{
	const controller = HomeController();

	return (
		<>
			<Header
				subtitleTxt={'Track your projects, tasks & team activity here.'}
				titleTxt={'Manage your projects'}
			/>

			<Box
				component={'main'}
				sx={{
					display: 'flex',
					gap: 5,
					flexDirection: 'column',
					justifyItems: 'center',
					flexWrap: 'wrap'
				}}>

				<TeamHeader controller={controller}
							data={useSelector(state => state.team.teams)}
							value={useSelector(state => state.team.selectedTeam)}/>

				<Box
					component={'section'}
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: 5
					}}>

					<TeamCard/>
					<InfoCard
						controller={controller}
						teamId={useSelector(state => state.team.selectedTeam?.id)}/>
				</Box>

				<Box
					component={'section'}>
					<Grid controller={controller}
						  teamId={useSelector(state => state.team.selectedTeam?.id)}/>
				</Box>
			</Box>
		</>
	)
};

export default Home;