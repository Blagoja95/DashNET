import { Box } from "@mui/material";

import { useSelector } from "react-redux";

import Navigation from "./navigation/Navigation";
import Search from './search/Search';
import Header from "./header/Header";

const Layout = ({ children }) => {
    const activeUser = useSelector(state => state.user.activeUser);
	return (
		<Box display='flex'>
			{activeUser && <Navigation />}
			<Box sx={{ width: '100%', p: '2rem 4rem 1rem 4rem' }}>
				<Search />
                <Header />
            	{children}
			</Box>
		</Box>
	);
};
export default Layout;
