import {ListItemIcon, MenuItem} from "@mui/material";

const ItemMenu = ({fn, txt, icon}) =>
{
	return <MenuItem onClick={ fn }>
		<ListItemIcon>{icon}</ListItemIcon>{txt}
	</MenuItem>
};

export default ItemMenu;