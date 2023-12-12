import { AppBar, Box, Button, Dialog, Toolbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/slices/uiSlice";
import CloseIcon from '@mui/icons-material/Close';
import DebounceInput from './debounced/Debounced'
import SearchRecord from "./searchRecord/SearchRecord";

const Search = ({}) =>
{
	const dispatch = useDispatch();

	const handleClose = () =>
	{
		dispatch(uiActions.setSearchOpen(false));
	};

	return <Dialog
		fullScreen={ true }
		open={ useSelector(state => state.ui.searchOpen) }
		onClose={ handleClose }
	>
		<AppBar sx={ {
			position: 'relative',
			padding: '10px 0px'
		} }>
			<Toolbar>
				<DebounceInput
					label={ 'Search for Users, Teams, Tasks or more ...' }
					id={ 'fullWidth' }
					handleDebounce={console.log}

				/>

				<Button autoFocus
						onClick={ handleClose }
						sx={ {
							color: 'inherit',
							marginLeft: 5,
							':hover': {
								color: 'primary.main'
							}
						} }>
					<CloseIcon/>
				</Button>
			</Toolbar>

			<Box sx={{
				display: 'flex',
				marginTop: 5,
				flexDirection: 'column',
				gap: 1
			}}>
				<SearchRecord data={{type: 'teams', title: 'some random title', id: 12342, about: 'lorem ipsum sdasda role sole soma somme'}}/>
				<SearchRecord data={{type: 'users', title: 'some random title', id: 12342, about: 'lorem ipsum sdasda role sole soma somme'}}/>
				<SearchRecord data={{type: 'tasks', title: 'some random title', id: 12342, about: 'lorem ipsum sdasda role sole soma somme'}}/>
			</Box>
		</AppBar>
	</Dialog>
};

export default Search;