import {Avatar} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

const UserAvatar = ({sx, data, ref}) =>
{
	if (!sx || typeof sx !== 'object')
	{
		sx = {width: 50, height: 50}
	}

	sx.fontSize = sx.width;

	return (typeof data === 'object' && data?.src)

		? <Avatar alt={data?.name ?? 'User image'}
				  src={data.src}
				  sx={sx}
				  ref={ref}>
		</Avatar>

		: <Avatar alt={data?.name ?? 'User image'} sx={sx}>
			<AccountCircleIcon sx={{fontSize: 'inherit'}}/>
		</Avatar>
};

export default UserAvatar;
