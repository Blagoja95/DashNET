import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/layout/navigation/Navigation';
import Home from './components/pages/home/Home';
import Search from './components/layout/search/Search'
import {useDispatch} from 'react-redux';
import { uiActions } from './store/slices/uiSlice';


const App = () =>
	{
		const dispatch = useDispatch();

		useEffect(() =>
		{
			const handleKey = (e) =>
			{
				if (e.ctrlKey && e.key === '/')
				{
					dispatch(uiActions.setSearchOpen(true));
				}
			};

			document.addEventListener('keydown', handleKey);

			return () => {document.removeEventListener('keydown', handleKey)};
		}, []);

		return (
			<Box display='flex'>
				<Navigation/>
				<Box sx={ {
					width: '100%',
					p: '2rem 4rem 1rem 4rem'
				} }>

						<Search/>

						<Routes>
							<Route path='/' element={ <Home/> }/>
							<Route path='/' element={ <div>Test</div> }/>
							<Route path='*' element={ <section>404 TODO</section> }/>
						</Routes>
				</Box>
			</Box>
		);
	}
;

export default App;