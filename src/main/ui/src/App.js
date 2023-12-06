import { Route, Routes } from 'react-router-dom';
import Navigation from './components/layout/navigation/Navigation';
import { Box } from '@mui/material';
import Home from './components/pages/home/Home';

const App = () =>
{
	return (
		<Box sx={ {
			display: 'flex'
		} }>
			<Box sx={ { bgcolor: 'gray.dark', width: '20%', height: '100vh', p: 2 } }>
				<Navigation/>
			</Box>

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