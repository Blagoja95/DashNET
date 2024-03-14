import { AppBar, Box, Button, Dialog, Toolbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../../store/slices/uiSlice';

import SearchRecord from './SearchRecord';
import SearchInput from './SearchInput';

const Search = () => {
	const dispatch = useDispatch();

	return (
		<Dialog
			fullScreen={true}
			open={useSelector((state) => state.ui.searchOpen)}
			onClose={() => dispatch(uiActions.setSearchOpen(false))}
		>
			<AppBar sx={{ position: 'relative', padding: '10px 0px' }}>
				<Toolbar>
					<SearchInput />
					<Button
						autoFocus
						onClick={() => dispatch(uiActions.setSearchOpen(false))}
						sx={{
							color: 'inherit',
							marginLeft: 5,
							':hover': { color: 'primary.main' },
						}}
					>
						<CloseIcon />
					</Button>
				</Toolbar>
			</AppBar>

			<Box sx={{ display: 'flex', marginTop: 5, flexDirection: 'column', gap: 1,borderBottom: '1px solid grey' }}>
				<SearchRecord
					data={{
						id: 12342,
						title: 'some random title',
						type: 'teams',
						about: 'lorem ipsum sdasda role sole soma somme'
					}}
				/>
				<SearchRecord
					data={{
						id: 12342,
						title: 'some random title',
						type: 'users',
						about: 'lorem ipsum sdasda role sole soma somme',
					}}
				/>
				<SearchRecord
					data={{
						id: 12342,
						title: "some random title",
						type: 'tasks',
						about: 'lorem ipsum sdasda role sole soma somme',
					}}
				/>
			</Box>
		</Dialog>
	);
};
export default Search;
