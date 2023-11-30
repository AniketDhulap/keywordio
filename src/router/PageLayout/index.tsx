import {
	AppBar,
	Box,
	CssBaseline,
	Paper,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import './pageLayout.css';

const PageLayout = () => {
	const theme = useTheme();
	const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<Box
				sx={{
					flexGrow: 1,
					width: { xs: '100%', lg: `calc(100vw)` },
				}}>
				<AppBar
					sx={{
						minHeight: '79px',
						boxShadow: 'none',
						position: 'sticky',
						top: 0,
						backgroundColor: 'red',
						display: 'flex',
						justifyContent: 'center',
					}}
					position="relative"></AppBar>

				<Box
					component="main"
					sx={{
						flexGrow: 1,
						// paddingRight: { xs: 1, lg: 3 },
						// paddingLeft: { xs: 1, lg: 0 },
						// paddingTop: { xs: 1, lg: 0 },
					}}>
					<Paper
						elevation={isDesktopScreen ? 1 : 0}
						className="content-background"
						sx={{
							// padding: { lg: '2rem', md: '1.5rem', xs: '1rem' },
							display: 'flex',
							flexDirection: 'column',
						}}>
						<Outlet />
					</Paper>
				</Box>
			</Box>
		</Box>
	);
};

export default PageLayout;
