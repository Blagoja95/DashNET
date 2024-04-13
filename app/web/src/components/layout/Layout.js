import { Box } from '@mui/material';

import Navigation from "./navigation/Navigation";
import Search from './header/search/Search';
import Header from "./header/Header";


const Layout = ({ children, showLayout = true }) => {
	return showLayout ? 
		<Box display='flex'>
			<Navigation />
			<Box sx={{ width: '100%', p: '2rem 4rem 1rem 4rem' }}>
				<Search />
                <Header />
            	{children}
			</Box>
		</Box> : 
		<>{children}</>
};
export default Layout;
