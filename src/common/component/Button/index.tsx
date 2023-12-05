import { FC } from 'react';
import { Button } from '@mui/material';
import { COLORS } from '../../constants';

interface ICommonButton {
	buttonText: string;
	backgroundColor: string;
	onClick: () => void;
	color: string;
	isDisabled: boolean;
}

const CommonButton: FC<ICommonButton> = ({
	buttonText,
	backgroundColor,
	onClick,
	color,
	isDisabled,
}) => {
	return (
		<Button
			disabled={isDisabled}
			onClick={onClick}
			variant="contained"
			className="createAdsButton"
			sx={{
				padding: {
					xs: '0.35rem 2.5rem',
					md: '0.45rem 3rem',
					lg: '0.55rem 4rem',
				},
				mx: {
					xs: 1,
					md: 1.5,
					lg: 2,
				},
				backgroundColor,
				color,
				fontWeight: 600,
				'&:hover': {
					color: COLORS.colorWhite,
				},
			}}>
			{buttonText}
		</Button>
	);
};

export default CommonButton;
