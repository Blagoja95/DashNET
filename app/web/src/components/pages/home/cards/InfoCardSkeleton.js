import { Card, CardActionArea, CardContent, Skeleton } from '@mui/material';

const InfoCardSkeleton = () =>
{
	return <Card sx={{ minWidth: 275, bgcolor: 'gray.dark', color: 'white.main', flex: 1, borderRadius: 5, p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
		<CardContent>
			<Skeleton variant='h3' sx={{ fontSize: '2rem' }} />
			<Skeleton variant='rounded' sx={{width:'45%', height:'10vh', marginTop: '2rem'}}/>
		</CardContent>

		<CardActionArea sx={ { display: 'flex' }}>
			<Skeleton variant='rounded' sx={{width:'100%', height:'14vh', }}/>
		</CardActionArea>
	</Card>
};

export default InfoCardSkeleton;