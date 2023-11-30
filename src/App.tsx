import './App.css';
import { ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { theme } from './lib/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
