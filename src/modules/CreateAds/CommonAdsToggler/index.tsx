import { FC } from 'react';
import { Box, Checkbox } from '@mui/material';

import Heading from '../../../common/component/Heading';
import { COLORS } from '../../../common/constants';
import { ADS_TYPES } from '../../../common/interface';

interface ICommonAdsToggler {
	onClick: (type: ADS_TYPES) => void;
	type: ADS_TYPES;
	adsType: ADS_TYPES | null;
	image: string;
	heading: string;
}

const CommonAdsToggler: FC<ICommonAdsToggler> = ({
	onClick,
	type,
	adsType,
	image,
	heading,
}) => {
	return (
		<Box className="togglerBox" onClick={() => onClick(type)}>
			<Checkbox
				checked={adsType === type}
				onChange={() => onClick(type)}
				inputProps={{ 'aria-label': 'controlled' }}
				sx={{
					'& .MuiSvgIcon-root': {
						width: 30,
						height: 30,
					},
					'&.Mui-checked': {
						color: COLORS.colorBlue,
					},
				}}
			/>
			<Box
				className="textAdsImageWrapper"
				sx={{
					padding: {
						lg: '1.5rem 3rem 0',
						md: '1rem 2rem 0 ',
						xs: '0.5rem 1rem 0',
					},
				}}>
				<img className="textAdsImage" src={image} alt="textAds" />
			</Box>
			<Box
				className="headingBox"
				sx={{
					padding: {
						xs: '0.5rem 0',
						md: '0.7rem 0',
						lg: '1rem 0',
					},
				}}>
				<Heading
					heading={'create'}
					fontWeight={300}
					fontSize={'17px'}
					color={COLORS.colorGrayDark}
				/>
				<Heading
					heading={heading}
					fontWeight={600}
					fontSize={'21px'}
					color={COLORS.colorBlack}
				/>
			</Box>
		</Box>
	);
};

export default CommonAdsToggler;
