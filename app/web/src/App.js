import {Route, Routes, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Layout from './components/layout/Layout';
import Home from './components/pages/home/Home';
import Settings from './components/pages/settings/Settings';
import Login from './components/pages/auth/login/Login';
import Register from './components/pages/auth/register/Register';
import Task from './components/pages/task/detailed/Task';
import CreateTask from './components/pages/task/create/CreateTask';

import useSearch from './hooks/useSearch';
import useSession from './hooks/useSession';

const App = () => {
	const activeUser = useSelector(state => state.user.activeUser);
	useSearch();
	useSession();

	return (
		<Layout showLayout={activeUser}>
			<Routes>
				<Route path='/' element={activeUser ? <Home /> : <Navigate to='/auth/login' />} />
				<Route path='/task/*' element={activeUser ? <Task /> : <Navigate to='/auth/login' />} />
				<Route path='/settings' element={activeUser ? <Settings /> : <Navigate to='/auth/login' />} />
				<Route path='/ntask' element={activeUser ? <CreateTask /> : <Navigate to='/auth/login' />} />
				<Route path='/auth/login' element={activeUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/auth/register' element={activeUser ? <Navigate to='/' />: <Register />} />
				<Route path='*' element={activeUser ? <section>404 TODO</section> : <Navigate to='/auth/login' />} />
			</Routes>
		</Layout>
	);
};

export default App;