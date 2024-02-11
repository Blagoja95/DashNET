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
import HandleSession from './components/pages/auth/HandleSession';
import Task from './components/pages/task/Task';

const App = () =>
{
	const activeUser = useSelector(state => state.user.activeUser);
	const dispatch = useDispatch();

	useEffect(() =>
	{
		const handleKey = (e) =>
		{
			if (activeUser && e.ctrlKey && e.key === '/')
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
	}, [activeUser]);

	return (
		<Box display='flex'>
			{activeUser && <Navigation />}
			<Box sx={{
				width: '100%',
				p: '2rem 4rem 1rem 4rem'
			}}>

				<HandleSession/>
				<Search />

				<Routes>
					<Route path='/' element={activeUser ? <Home /> : <Login />} />
					<Route path='/task/*' element={activeUser ? <Task /> : <Login />} />
					<Route path='/settings' element={activeUser ? <Settings /> : <Login />} />
					<Route path='/auth/login' element={activeUser ? <Home /> : <Login />} />
					<Route path='/auth/register' element={activeUser ? <Home /> : <Register />} />
					<Route path='/' element={activeUser ? <div>Test</div> : <Login />} />
					<Route path='*' element={activeUser ? <section>404 TODO</section> : <Login />} />
				</Routes>
			</Box>
		</Box>
	);
};

export default App;