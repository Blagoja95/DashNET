import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { resetInitialised, uiActions } from '../../../store/slices/uiSlice';
import Header from '../../layout/header/Header';
import Grid from "../../ui/grid/Grid";
import { Box, Chip } from "@mui/material";
import TeamCard from './TeamCard';
import InfoCard from './InfoCard';

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() =>
	{
		dispatch(uiActions.setInitialised(true));
		dispatch(resetInitialised());
	}, [dispatch]);

	return (
		<>
			<header>
				<Header
					subtitleTxt={'Track your projects, tasks & team activity here'}
					titleTxt={'Manage your projects'}
				/>
			</header>

			<main>
				<Box sx={{ display: 'flex', gap: 5 }}>
					<TeamCard />
					<InfoCard />
				</Box>
			</main>
		</>
	)
};

export default Home;