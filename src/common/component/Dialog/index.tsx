import React, { FC } from 'react';
import { Box } from '@mui/material';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { TransitionProps } from '@mui/material/transitions';

import { COLORS } from '../../constants';
import Heading from '../Heading';

interface IPopUp {
	dialog: any;
	onclose: () => void;
}

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const PopUp: FC<IPopUp> = ({ dialog, onclose }) => {
	return (
		<React.Fragment>
			<Dialog
				fullWidth
				maxWidth={'xs'}
				open={dialog.isOpen}
				TransitionComponent={Transition}
				keepMounted
				onClose={onclose}
				aria-describedby="alert-dialog-slide-description">
				<DialogContent>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							flexDirection: 'column',
							p: {
								xs: '1rem',
								md: '1.75rem',
								lg: '2.5rem',
							},
						}}>
						<Box sx={{ xs: 0.15, md: 0.17, lg: 0.2 }}>
							<CheckCircleIcon sx={{ color: COLORS.colorBlue, fontSize: 34 }} />
						</Box>
						<Heading
							heading={dialog.message}
							fontWeight={500}
							fontSize={'18px'}
							color={COLORS.colorGrayDark}
						/>
					</Box>
				</DialogContent>
			</Dialog>
		</React.Fragment>
	);
};

export default PopUp;
