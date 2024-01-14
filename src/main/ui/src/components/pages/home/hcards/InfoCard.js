import { Box, Card, CardActions, CardContent, Typography } from "@mui/material"
import {useEffect} from "react";

const InfoCard = (countData) => {
	let count = null;

	useEffect(() =>
	{
		fetch('http://localhost:8080/tasks/count')
			.then(res => res.json())
			.then(data =>
			{
				if (data.status === 1)
				{
					count = data.data;
				}
			})
			.catch(e => console.warn(e));
	}, []);

	console.log(count)
	return (
		<Card sx={{ minWidth: 275, bgcolor: 'gray.dark', color: 'white.main', flex: 1, borderRadius: 5, p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
			<CardContent>
				<Typography variant='h3' sx={{ color: 'white.light' }}>Overall information</Typography>
				<Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1, my: 5 }}>
					<Typography variant='h3' sx={{ color: 'white.light' }}>57 / 125</Typography>
					<Typography variant='body2'>tasks done</Typography>
				</Box>
			</CardContent>
			<Box sx={{ display: 'flex', gap: 1 }}>
				<Box
					sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', bgcolor: 'error.main', color: 'white.light', borderRadius: 3, py: 2 }}>
					<Typography variant='h4' sx={{ py: 5 }}>30</Typography>
					<Typography variant='body1'>Not started</Typography>
				</Box>
				<Box
					sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', bgcolor: 'error.main', color: 'white.light', borderRadius: 3, py: 2 }}>
					<Typography variant='h4' sx={{ py: 5 }}>30</Typography>
					<Typography variant='body1'>Not started</Typography>
				</Box>
				<Box
					sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', bgcolor: 'error.main', color: 'white.light', borderRadius: 3, py: 2 }}>
					<Typography variant='h4' sx={{ py: 5 }}>30</Typography>
					<Typography variant='body1'>Not started</Typography>
				</Box>
				<Box
					sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', bgcolor: 'info.main', color: 'white.light', borderRadius: 3, py: 2 }}>
					<Typography variant='h4' sx={{ py: 5 }}>36</Typography>
					<Typography variant='body1'>In Progress</Typography>
				</Box>
				<CardActions
					sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', bgcolor: 'success.light', color: 'white.light', borderRadius: 3, py: 2 }}>
					<Typography variant='h4' sx={{ py: 5 }}>57</Typography>
					<Typography variant='body1'>Done</Typography>
				</CardActions>
			</Box>
		</Card>
	)
}
export default InfoCard