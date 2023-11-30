import DragHandleIcon from '@mui/icons-material/DragHandle';
import { AppBar, Box, CssBaseline, IconButton, Paper } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { Logo } from '../../common/component/Logo';
import { COLORS } from '../../common/constants';
import './pageLayout.scss';

const PageLayout = () => {
	return (
		<Box className="pageLayoutWrapper">
			<CssBaseline />
			<Box
				className="pageLayout"
				sx={{
					flexGrow: 1,
					width: { xs: '100%', lg: `calc(100vw)` },
				}}>
				<AppBar
					className="appBar"
					sx={{
						minHeight: '79px',
						position: 'sticky',
						top: 0,
						px: {
							xs: 1,
							sm: 2,
							md: 3,
							lg: 4,
						},
					}}
					position="relative">
					{/* <Typography variant="h5" noWrap component="a" className="logo">
						APP LOGO
					</Typography> */}
					<Box sx={{ minWidth: '70px', width: '130px', mt: 1 }}>
						<Logo fill={COLORS.colorBlue} />
					</Box>
					<Box
						className="linkWrapper"
						sx={{
							display: {
								sm: 'flex',
								xs: 'none',
							},
						}}>
						<Link to={'/dashboard'} className="link">
							Dashboard
						</Link>
						<Link to={'/create-ads'} className="link">
							Create Ads
						</Link>
					</Box>
					<IconButton
						sx={{
							display: {
								sm: 'none',
							},
						}}>
						<DragHandleIcon />
					</IconButton>
				</AppBar>

				<Box
					component="main"
					sx={{
						flexGrow: 1,
						padding: { xs: 1, sm: 2, lg: 3 },
					}}>
					<Paper
						elevation={0}
						className="content-wrapper"
						sx={{
							padding: { lg: '1.5rem', md: '1rem', xs: '1rem' },
						}}>
						<Outlet />
					</Paper>
				</Box>
			</Box>
		</Box>
	);
};

export default PageLayout;
