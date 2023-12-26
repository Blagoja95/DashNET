import { Avatar, Divider, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../../store/slices/uiSlice";
import { userActions } from "../../../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const UserMenu = ({ refP }) =>
{
	const dispatch = useDispatch();
	const nav = useNavigate();

	const handleClose = () =>
	{
		dispatch(uiActions.setUserMenuOpen(false));
	};

	const handleLogout = () =>
	{
		dispatch(userActions.setActiveUser(null));

		handleClose();
	};

	const handleSettings = () =>
	{
		nav('/settings');

		handleClose();
	};
	console.log(useSelector(state => state.ui.userMenuOpen))
	return <Menu
		anchorEl={ refP.current }
		id="account-menu"
		open={ useSelector(state => state.ui.userMenuOpen) }
		onClose={ handleClose }
		sx={ {
			elevation: 0,
			sx: {
				overflow: 'visible',
				filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
				mt: 1.5,
				'& .MuiAvatar-root': {
					width: 32,
					height: 32,
					ml: -0.5,
					mr: 1,
				},
				'&::before': {
					content: '""',
					display: 'block',
					position: 'absolute',
					top: 0,
					right: 14,
					width: 10,
					height: 10,
					bgcolor: 'background.paper',
					transform: 'translateY(-50%) rotate(45deg)',
					zIndex: 0,
				},
			},
		} }
		transformOrigin={ { horizontal: 'right', vertical: 'top' } }
		anchorOrigin={ { horizontal: 'right', vertical: 'bottom' } }
	>
		<MenuItem onClick={ handleClose }>
			<Avatar/>

			<Typography sx={ { paddingLeft: 2 } }>
				Profile
			</Typography>
		</MenuItem>

		<Divider/>

		<MenuItem onClick={ handleClose }>
			<ListItemIcon>
				<PersonAdd fontSize="small"/>
			</ListItemIcon>
			Add another account
		</MenuItem>

		<MenuItem onClick={ handleSettings }>
			<ListItemIcon>
				<Settings fontSize="small"/>
			</ListItemIcon>
			Settings
		</MenuItem>

		<MenuItem onClick={ handleLogout }>
			<ListItemIcon>
				<Logout fontSize="small"/>
			</ListItemIcon>
			Logout
		</MenuItem>
	</Menu>;
};

export default UserMenu;