import { Avatar, AvatarGroup, Box, Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material"
import { DateRange } from "@mui/icons-material"

const TeamCard = () => {
	return (
		<Card sx={{ minWidth: 275, bgcolor: 'gray.dark', color: 'white.main', flex: 1, borderRadius: 5, p: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
			<CardContent>
				<Typography variant='h6' sx={{ bgcolor: 'gray.main', display: 'inline-block', p: 1, borderRadius: 1, fontWeight: 'light', mb: 2 }}>#Design</Typography>
				<Typography variant='h5' sx={{ my: 2 }}>Team 1 - Progress</Typography>
				<Box sx={{ display: 'flex', gap: 2 }}>
					<Divider sx={{ bgcolor: 'primary.main', flex: 1, borderWidth: 3, borderRadius: 2 }} />
					<Divider sx={{ bgcolor: 'primary.main', flex: 1, borderWidth: 3, borderRadius: 2 }} />
					<Divider sx={{ bgcolor: 'white.main', flex: 1, borderWidth: 3, borderRadius: 2 }} />
					<Divider sx={{ bgcolor: 'white.main', flex: 1, borderWidth: 3, borderRadius: 2 }} />
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
					<DateRange sx={{ fontSize: '2.5rem' }} />
					<Typography variant='body2'>31 December, 2023</Typography>
				</Box>
				<Box sx={{ display: 'flex', borderWidth: 1, borderStyle: 'solid', borderColor: 'white.main', p: 1, borderRadius: 10 }}>
					<AvatarGroup max={4}>
						<Avatar alt='O' src='/' />
						<Avatar alt='V' src='/' />
						<Avatar alt='R' src='/' />
						<Avatar alt='S' src='/' />
						<Avatar alt='S' src='/' />
					</AvatarGroup>
				</Box>
			</CardContent>
			<CardActions>
				<Button variant='contained' size='large' sx={{ width: '100%', borderRadius: 3, fontSize: '1.25rem' }}>See Details</Button>
			</CardActions>
		</Card>
	)
}
export default TeamCard