import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Home, AssignmentTurnedIn, Dashboard, BarChart, Group, Settings, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const Navigation = () => {
	const { pathname } = useLocation();
	const theme = useTheme();

	const [isFull, setIsFull] = useState(true);

	const navItems = [
		{ text: 'Home', icon: Home, to: '/' },
		{ text: 'My Tasks', icon: AssignmentTurnedIn, to: '/tasks' },
		{ text: 'My Projects', icon: Dashboard, to: '/projects' },
		{ text: 'Statistics', icon: BarChart, to: '/statistics' },
		{ text: 'Users', icon: Group, to: '/users' },
		{ text: 'Settings', icon: Settings, to: '/settings' }
	];
	return (
		<Drawer
			variant="permanent"
			sx={{
				'& .MuiPaper-root':
				{
					bgcolor: 'gray.dark',
					position: 'relative',
					overflowX: 'hidden',
					height: '100vh',
					'&::-webkit-scrollbar': {
						display: 'none'
					},
					transition: theme.transitions.create('width', {
						easing: theme.transitions.easing.sharp,
						duration: isFull ? theme.transitions.duration.leavingScreen : theme.transitions.duration.enteringScreen
					}),
					width: !isFull ? `calc(${theme.spacing(12)} + 1px)` : '25vw'
				}
			}}>
			<List sx={{
				pt: '2rem',
				px: '1rem'
			}}>
				<Box component='div' display='flex' alignItems='center' justifyContent='center' mb='5rem'>
					<Typography variant="h5" textAlign='center' px="5rem" color='white.main' display={isFull ? 'block' : 'none'} flex={1}>
						Dash
						<Box component='span' fontWeight='bold' color='primary.main'>NET</Box>
					</Typography>
					<Box
						onClick={() => setIsFull(el => !el)}
						component='span'
						ml='0.5rem'
						sx={{
							borderRadius: '5px',
							cursor: 'pointer',
							'&:hover': { bgcolor: 'gray.main' }
						}}
					>
						{isFull ? <ChevronLeft color="white" style={{ fontSize: '3rem' }} /> : <ChevronRight color="white" style={{ fontSize: '3rem' }} />}
					</Box>
				</Box>
				{
					navItems.map((el, idx) =>
						<ListItemButton LinkComponent={NavLink} to={el.to} key={idx}
							sx={{
								my: '2rem',
								py: '1rem',
								borderRadius: '5px',
								gap: '25%',
								bgcolor: el.to === pathname && 'gray.main',
								'&:hover': { bgcolor: 'gray.main' },
								'&:hover *': { color: 'primary.main' }
							}}>
							<ListItemIcon><el.icon color={el.to === pathname ? 'primary' : 'white'} sx={{ fontSize: '2rem' }} /></ListItemIcon>
							{isFull && <ListItemText primary={el.text} primaryTypographyProps={{
								color: el.to === pathname ? 'primary.main' : 'white.main', fontSize: '1.5rem',

							}} />}
						</ListItemButton>
					)}
			</List>
		</Drawer>
	)
}
export default Navigation