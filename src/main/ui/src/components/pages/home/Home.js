import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { resetInitialised, uiActions } from '../../../store/slices/uiSlice';
import Header from '../../layout/header/Header';
import Grid from "../../ui/grid/Grid";
import { Box } from "@mui/material";
import TeamCard from './TeamCard';
import InfoCard from './InfoCard';

const Home = () =>
{
	const dispatch = useDispatch();

	useEffect(() =>
	{
		dispatch(uiActions.setInitialised(true));
		dispatch(resetInitialised());
	}, [ dispatch ]);

	return (
		<>
			<Header
				subtitleTxt={ 'Track your projects, tasks & team activity here' }
				titleTxt={ 'Manage your projects' }
			/>

			<Box
				component={ 'main' }
				sx={ {
					display: 'flex',
					gap: 5,
					flexDirection: 'column',
					justifyItems: 'center',
					flexWrap: 'wrap'
				} }>

				<Box
					component={ 'section' }
					sx={ {
						display: 'flex',
						flexWrap: 'wrap',
						gap: 5
					} }>
					<TeamCard/>
					<InfoCard/>
				</Box>

				<Box
					component={ 'section' }>
					<Grid/>
				</Box>
			</Box>
		</>
	)};

export default Home;