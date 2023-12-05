import { ChangeEvent, FC } from 'react';
import { Box, TextField } from '@mui/material';

import { COLORS } from '../../constants';
import Heading from '../Heading';

interface ITextFieldWithHeading {
	heading: string;
	placeholder: string;
	state: string;
	setState: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldWithHeading: FC<ITextFieldWithHeading> = ({
	heading,
	placeholder,
	state,
	setState,
}) => {
	return (
		<Box
			sx={{
				marginTop: {
					xs: '0.8rem',
					md: '1.05rem',
					lg: '1.2rem',
				},
			}}>
			<Heading
				heading={heading}
				fontWeight={500}
				fontSize={'17.5px'}
				color={COLORS.colorGrayDark}
			/>
			<TextField
				sx={{
					width: '100%',
					marginTop: {
						xs: '0.4rem',
						md: '0.6rem',
						lg: '0.95rem',
					},
				}}
				variant="outlined"
				placeholder={placeholder}
				onChange={(event: ChangeEvent<HTMLInputElement>) => {
					setState(event);
				}}
				value={state}
			/>
		</Box>
	);
};

export default TextFieldWithHeading;
