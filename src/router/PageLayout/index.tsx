import { AppBar, Box, CssBaseline, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { Logo } from '../../common/component/Logo';
import { COLORS } from '../../common/constants';
import { setDialogBox } from '../../redux/reducer/dialogSlice';
import PopUp from '../../common/component/Dialog';
import { DIALOG_TYPE } from '../../common/interface';
import './pageLayout.scss';

const PageLayout = () => {
	const dialog = useSelector((state: any) => state.dialog.config);
	const dispatch = useDispatch();

	return (
		<Box
			className="pageLayout"
			sx={{
				width: { xs: '100%', lg: '100%' },
			}}>
			<CssBaseline />
			<AppBar
				className="appBar"
				sx={{
					minHeight: '79px',
					position: 'sticky',
					top: 0,
					px: {
						xs: 2,
						sm: 2.5,
						md: 3,
						lg: 4,
					},
				}}>
				<Link to={'/dashboard'}>
					{/* <Typography variant="h5" noWrap component="a" className="logo">
						APP LOGO
					</Typography> */}
					<Box sx={{ minWidth: '70px', width: '130px', mt: 1 }}>
						<Logo fill={COLORS.colorBlue} />
					</Box>
				</Link>
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
					<MenuIcon />
				</IconButton>
			</AppBar>

			<Box
				component="main"
				className="content-wrapper"
				sx={{
					padding: { lg: '1.5rem', md: '1rem', xs: '1rem' },
				}}>
				<Outlet />
			</Box>

			{dialog.isOpen && (
				<PopUp
					dialog={dialog}
					onclose={() => {
						dispatch(
							setDialogBox({
								isOpen: false,
								message: DIALOG_TYPE.EMPTY,
							})
						);
					}}
				/>
			)}
		</Box>
	);
};

export default PageLayout;
