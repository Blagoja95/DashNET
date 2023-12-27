import { Avatar, Divider, Menu, MenuItem, Typography } from "@mui/material";
import {Logout, PersonAdd, GroupAdd, Settings, AddTask} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../../store/slices/uiSlice";
import { userActions } from "../../../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import ItemMenu from "./ItemMenu";

const UserMenu = ({ refP, open }) =>
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

	const handleAddNewAcc = () =>
	{
		nav('/nusers'); //TOOD

		handleClose();
	}

	const items = [
		{fn: handleClose, txt: 'Create new team', icon: <GroupAdd fontSize="small"/>},
		{fn: handleAddNewAcc, txt: 'Create new user', icon: <PersonAdd fontSize="small"/>},
		{fn: handleClose, txt: 'Create new task', icon: <AddTask fontSize="small"/>},
		{fn: handleSettings, txt: 'Settings', icon: <Settings fontSize="small"/>},
		{fn: handleLogout, txt: 'Logout', icon: <Logout fontSize="small"/>},]

	return <Menu
		anchorEl={ refP.current }
		id="account-menu"
		open={ open }
		onClose={ handleClose }
		transformOrigin={ { horizontal: 'center', vertical: 'top' } }
		anchorOrigin={ { horizontal: 'center', vertical: 'bottom' } }>

		<MenuItem onClick={ handleClose }>
			<Avatar/>
			<Typography sx={ { paddingLeft: 2 } }>
				Profile
			</Typography>
		</MenuItem>
		<Divider/>

		{items.map(item => <ItemMenu fn={item.fn} icon={item.icon} txt={item.txt} key={item.text + '-' + Math.random()}/>)}
	</Menu>;
};

export default UserMenu;