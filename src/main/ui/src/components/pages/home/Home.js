import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import Header from '../../layout/header/Header';
import Grid from '../../ui/grid/Grid';
import {Box} from '@mui/material';
import TeamCard from './hcards/TeamCard';
import InfoCard from './hcards/InfoCard';
import HomeController from "./HomeController";
import TeamHeader from "./teamHeader/TeamHeader";
import {teamActions} from "../../../store/slices/teamSlice";

const Home = () =>
{
	const controller = HomeController();
	const dispatch = useDispatch();

	useEffect(() =>
	{
		dispatch(teamActions.setTeams([{id: 123, label: 'Back-end team'}, {id: 1232, label: 'Technical documentation team'}, {id: 133, label: 'Front-end team'}]))
	}, []);

	return (
		<>
			<Header
				subtitleTxt={'Track your projects, tasks & team activity here'}
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
					<InfoCard countData={count}/>
				</Box>

				<Box
					component={'section'}>
					<Grid/>
				</Box>
			</Box>
		</>
	)
};

export default Home;