import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography, Button, Tooltip } from '@mui/material';

import {useDispatch, useSelector} from 'react-redux';
import { uiActions } from '../../../store/slices/uiSlice';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import UserAvatar from '../../ui/avatar/UserAvatar';
import UserMenu from './menu/UserMenu';

const Header = () => {
	const { pathname } = useLocation();
	const [title, setTitle] = useState('');
	const [subtitle, setSubtitle] = useState('');

	const dispatch = useDispatch();
	const refUser = useRef(null);
	const open = useSelector(state => state.ui.userMenuOpen);

	useEffect(() => {
		if (pathname === '/settings') {
			setTitle('User Settings');
			setSubtitle('Edit profile settings, upload avatar and more.');
		} else {
			setTitle('Manage your projects');
			setSubtitle('Track your projects, tasks & team activity here.');
		}
	}, [pathname]);

	return (
	<Box sx={{ p: '1rem', display: 'flex', flexDirection: 'column' }}>
		<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<Box>
				<Typography variant='h3' noWrap sx={{ fontWeight: 'bold', maxWidth: 900 }}>{title}</Typography>
				<Typography variant='subtitle1' sx={{ display: 'block', color: 'white.main', marginTop: '1rem' }}>{subtitle}</Typography>
			</Box>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
				<Tooltip title={'Press CTRL + / to open search window'}>
					<Button onClick={() => dispatch(uiActions.setSearchOpen(true))}>
						<SearchIcon color='primary' sx={{ cursor: 'pointer' }} />
					</Button>
				</Tooltip>
				<Box sx={{ cursor: 'pointer', border: '2px solid transparent', marginRight: 6,
						'&:hover': { border: '2px solid', borderRadius: '50%' }}}
					onClick={() => dispatch(uiActions.setUserMenuOpen(!open))}
					ref={refUser}>
					<UserAvatar data={{src: 'https://randomuser.me/api/portraits/lego/2.jpg'}} />
					<UserMenu refP={refUser} open={open}/>
				</Box>
			</Box>
		</Box>
	</Box>
	);
};

export default Header;