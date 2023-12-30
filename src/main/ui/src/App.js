import {Box} from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import {useEffect} from 'react';
import Navigation from './components/layout/navigation/Navigation';
import Home from './components/pages/home/Home';
import Search from './components/layout/search/Search'
import {useDispatch, useSelector} from 'react-redux';
import {uiActions} from './store/slices/uiSlice';
import Settings from './components/pages/settings/Settings';
import Login from './components/pages/auth/login/Login';
import Register from './components/pages/auth/register/Register';

const App = () =>
{
	const activeUser = useSelector(state => state.user.activeUser);
	const dispatch = useDispatch();

	useEffect(() =>
	{
		const handleKey = (e) =>
		{
			if (e.ctrlKey && e.key === '/')
			{
				e.preventDefault();

				dispatch(uiActions.setSearchOpen(true));
			}
		};

		document.addEventListener('keydown', handleKey);

		return () =>
		{
			document.removeEventListener('keydown', handleKey)
		};
	}, []);

	return (
		<Box display='flex'>
			{activeUser && <Navigation />}
			<Box sx={{
				width: '100%',
				p: '2rem 4rem 1rem 4rem'
			}}>

				<Search />

				<Routes>
					<Route path='/' element={activeUser ? <Home /> : <Login />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/auth/login' element={activeUser ? <Home /> : <Login />} />
					<Route path='/auth/register' element={activeUser ? <Home /> : <Register />} />
					<Route path='/' element={<div>Test</div>} />
					<Route path='*' element={<section>404 TODO</section>} />
				</Routes>
			</Box>
		</Box>
	);
};

export default App;