import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useState } from "react";
import Navigation from './components/layout/navigation/Navigation';
import Home from './components/pages/home/Home';
import Search from './components/layout/search/Search'

export const SearchDialog = createContext();

const App = () =>
	{
		let [ open, setOpen ] = useState(false);

		useEffect(() =>
		{
			const handleKey = (e) =>
			{
				if (e.ctrlKey && e.key === '/')
				{
					setOpen(true);
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

					<SearchDialog.Provider value={ { open, setOpen } }>
						<Search/>

						<Routes>
							<Route path='/' element={ <Home/> }/>
							<Route path='*' element={ <section>404 TODO</section> }/>
						</Routes>
					</SearchDialog.Provider>
				</Box>
			</Box>
		);
	}
;

export default App;