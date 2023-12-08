import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store/store';

import { BrowserRouter } from 'react-router-dom';

import { createTheme } from '@mui/material/styles';


import App from './App';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

const root = createRoot(document.getElementById('root'));

const themeDark = createTheme({
	typography: {
		fontFamily: 'Inter, sans-serif',
	},
	palette: {
		mode: 'dark',
		primary: {
			main: '#36BCBA',
			contrastText: '#FFFFFF'
		},
		gray: {
			main: '#252A31',
			dark: '#1A1F1F'
		},
		black: {
			main: '#000000'
		},
		white: {
			main: '#BBBFC8',
			light: '#FFFFFF'
		}
	}
});

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={ store }>
				<ThemeProvider theme={ themeDark }>
					<CssBaseline>
						<App/>
					</CssBaseline>
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);


