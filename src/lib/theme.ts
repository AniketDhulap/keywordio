import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#1e53af',
		},
		secondary: {
			main: '#5680ff',
		},
		success: {
			main: '#30ae3d',
			contrastText: 'white',
		},
		error: {
			main: '#d32f2f',
		},
		warning: {
			main: '#fd770e',
			contrastText: 'white',
		},
		info: {
			main: '#fb67ff',
			contrastText: 'white',
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 576,
			md: 768,
			lg: 992,
			xl: 1200,
		},
	},
});
