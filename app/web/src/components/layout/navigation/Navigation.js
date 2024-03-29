import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Home, AssignmentTurnedIn, Dashboard, BarChart, Group, Settings, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "@emotion/react";

import logo from '../../../assets/DashNET.svg';

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
			variant='permanent'
			sx={{
				'& .MuiPaper-root':
				{
					bgcolor: 'gray.dark',
					position: 'sticky',
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
			}}
				  component={ 'nav' }>

				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: '5rem' }}>
					<Box component='img' src={logo} sx={{display: isFull ? 'inline' : 'none', mx: 'auto', width: 100}} />
					<Box
						onClick={() => setIsFull(el => !el)}
						component='span'
						sx={{
							borderRadius: '5px',
							cursor: 'pointer',
							p: '0.5rem',
							'&:hover': { bgcolor: 'gray.main' }
						}}
					>
						{isFull ? <ChevronLeft sx={{ fontSize: '3rem', color: 'white.main' }} /> : <ChevronRight sx={{ fontSize: '3rem', color: 'white.main' }} />}
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
							<ListItemIcon>
								<el.icon sx={{ fontSize: '2rem', color: el.to === pathname ? 'primary.main' : 'white.main' }} />
							</ListItemIcon>
							{isFull && <ListItemText primary={el.text} primaryTypographyProps={{ color: el.to === pathname ? 'primary.main' : 'white.main', fontSize: '1.5rem' }} />}
						</ListItemButton>
					)}
			</List>
		</Drawer>
	)
}
export default Navigation