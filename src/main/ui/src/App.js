import { Route, Routes } from 'react-router-dom';
import Navigation from './components/layout/navigation/Navigation';
import { Box } from '@mui/material';
import Home from './components/pages/home/Home';

const App = () =>
{
	return (
		<Box display='flex'>
			<Navigation/>
			<Box sx={ {
				bgcolor: 'black.main',
				color: 'white.main',
				width: '100%',
				p: '2rem 4rem 1rem 4rem'
			} }>

				<Routes>
					<Route path='/' element={ <Home/> }/>
					<Route path='*' element={ <section>404 TODO</section> }/>
				</Routes>
			</Box>
		</Box>
	);
}

export default App;