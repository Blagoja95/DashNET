import { AppBar, Button, Dialog, TextField, Toolbar } from "@mui/material";
import { useContext } from "react";
import { SearchDialog } from "../../../App";

function CloseIcon()
{
	return null;
}

const Search = ({}) =>
{
	const { open, setOpen } = useContext(SearchDialog);

	const handleClose = () =>
	{
		setOpen(false);
	};

	return <Dialog
		fullScreen={ true }
		open={ open }
		onClose={ handleClose }
	>
		<AppBar sx={ {
			position: 'relative',
		padding: '10px 0px'} }>
			<Toolbar>
				<TextField fullWidth label="Search for Users, Teams, Tasks or more ..." id="fullWidth" autoFocus={true}/>

				<Button autoFocus color="inherit" onClick={ handleClose }>
					Close
				</Button>
			</Toolbar>
		</AppBar>
	</Dialog>
};

export default Search;