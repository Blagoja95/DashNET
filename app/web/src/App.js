import {Route, Routes} from 'react-router-dom';
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
		<Layout>
			<Routes>
				<Route path='/' element={activeUser ? <Home /> : <Login />} />
				<Route path='/task/*' element={activeUser ? <Task /> : <Login />} />
				<Route path='/settings' element={activeUser ? <Settings /> : <Login />} />
				<Route path='/auth/login' element={activeUser ? <Home /> : <Login />} />
				<Route path='/auth/register' element={activeUser ? <Home /> : <Register />} />
				<Route path='/ntask' element={activeUser ? <CreateTask /> : <Login />} />
				<Route path='/' element={activeUser ? <div>Test</div> : <Login />} />
				<Route path='*' element={activeUser ? <section>404 TODO</section> : <Login />} />
			</Routes>
		</Layout>
	);
};

export default App;