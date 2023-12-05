import { FC } from 'react';
import { Typography } from '@mui/material';

import { IHeading } from '../../interface';

const Heading: FC<IHeading> = ({ heading, fontSize, fontWeight, color }) => {
	return (
		<Typography sx={{ fontSize, fontWeight, color }}>{heading}</Typography>
	);
};

export default Heading;
