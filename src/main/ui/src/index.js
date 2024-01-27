import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import darkTheme from './theme/dark/dark'
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import {CookiesProvider} from 'react-cookie';

const root = createRoot(document.getElementById('root'));

const themeDark = createTheme(darkTheme);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={ store }>
				<ThemeProvider theme={ themeDark }>
					<CssBaseline>
						<CookiesProvider>
						<App/>
						</CookiesProvider>
					</CssBaseline>
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);


