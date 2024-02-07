import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import InfoCardSkeleton from "./InfoCardSkeleton";

const InfoCard = ({ teamId, controller }) =>
{
	useEffect(() =>
	{
		controller.getCount(teamId);
	}, [teamId]);

	const count = useSelector(state => state.team.teamStats)

	return (count !== null
			 ? <Card sx={{ minWidth: 275, bgcolor: 'gray.dark', color: 'white.main', flex: 1, borderRadius: 5, p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
			<CardContent>
				<Typography variant='h5' sx={{ color: 'white.light' }}>Overall information</Typography>
				<Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1, my: 3 }}>
					<Typography variant='h3' sx={{ color: 'white.light' }}>{count.done} / {count.total}</Typography>
					<Typography variant='body2'>tasks done</Typography>
				</Box>
			</CardContent>
			<CardActionArea sx={{ display: 'flex', gap: 1 }}>
				<Box
					sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', bgcolor: 'secondary.main', color: 'white.light', borderRadius: 3, py: 2 }}>
					<Typography variant='h4' sx={{ py: 3 }}>{count.notStarted}</Typography>
					<Typography variant='body1'>Not started</Typography>
				</Box>
				<Box
					sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', bgcolor: 'primary.main', color: 'white.light', borderRadius: 3, py: 2 }}>
					<Typography variant='h4' sx={{ py: 3 }}>{count.inProgress}</Typography>
					<Typography variant='body1'>In Progress</Typography>
				</Box>
				<Box
					sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', bgcolor: 'warning.main', color: 'white.light', borderRadius: 3, py: 2 }}>
					<Typography variant='h4' sx={{ py: 3 }}>{count.review}</Typography>
					<Typography variant='body1'>Review</Typography>
				</Box>

				<Box
					sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', bgcolor: 'success.light', color: 'white.light', borderRadius: 3, py: 2 }}>
					<Typography variant='h4' sx={{ py: 3 }}>{count.done}</Typography>
					<Typography variant='body1'>Done</Typography>
				</Box>
			</CardActionArea>
		</Card>
		   : <InfoCardSkeleton />);
}
export default InfoCard