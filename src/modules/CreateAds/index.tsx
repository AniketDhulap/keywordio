import {
	Box,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import TextFieldWithHeading from '../../common/component/TextFieldWithHeading';
import { ADS_CONTENT, ADS_TYPES, DIALOG_TYPE } from '../../common/interface';
import { setDialogBox } from '../../redux/reducer/dialogSlice';
import MediaAdsImage from '../../assets/images/media-ads.png';
import TextAdsImage from '../../assets/images/text-ads.png';
import CommonButton from '../../common/component/Button';
import Heading from '../../common/component/Heading';
import CommonAdsToggler from './CommonAdsToggler';
import { COLORS } from '../../common/constants';
import './createAds.scss';

interface ITextAds {
	heading01: string;
	heading02: string;
	description: string;
	businessName: string;
	buttonLabel: string;
	websiteURL: string;
}

interface IMediaAds extends ITextAds {
	landscapeMarketingImage: string;
	potraitMarketingImage: string;
	squareMarketingImage: string;
	videoUrl: string;
}
const CreateAds: FC = () => {
	const dispatch = useDispatch();

	const [adsType, setAdsType] = useState<ADS_TYPES | null>(null);
	const [content, setContent] = useState<ADS_CONTENT>(ADS_CONTENT.TOGGLER);
	const [textAds, setTextAds] = useState<ITextAds>({
		heading01: '',
		heading02: '',
		description: '',
		businessName: '',
		buttonLabel: '',
		websiteURL: '',
	});
	const [mediaAds, setMediaAds] = useState<IMediaAds>({
		heading01: '',
		heading02: '',
		description: '',
		businessName: '',
		buttonLabel: '',
		websiteURL: '',
		landscapeMarketingImage: '',
		potraitMarketingImage: '',
		squareMarketingImage: '',
		videoUrl: '',
	});

	const isValueSelected =
		adsType === ADS_TYPES.TEXT_ADS
			? textAds.buttonLabel !== ''
			: mediaAds.buttonLabel !== '';

	function handleChange(type: ADS_TYPES) {
		if (type === ADS_TYPES.TEXT_ADS && type === adsType) {
			setAdsType(null);
			return;
		}
		if (type === ADS_TYPES.MEDIA_ADS && type === adsType) {
			setAdsType(null);
			return;
		}
		setAdsType(type);
	}

	function handleFormSubmit() {
		dispatch(
			setDialogBox({
				isOpen: true,
				message: 'Submitted',
				status: DIALOG_TYPE.SUCCESS,
			})
		);
		setTimeout(() => {
			dispatch(
				setDialogBox({
					isOpen: false,
					message: '',
					status: DIALOG_TYPE.EMPTY,
				})
			);
			setContent(ADS_CONTENT.TOGGLER);
		}, 600);
	}

	function renderAdsToggler() {
		return (
			<Box
				className="toggleAdsWrapper"
				sx={{
					padding: {
						xs: '1rem 0',
						md: '1.5rem 0',
						lg: '2rem 0',
					},
				}}>
				<Box className="toggleAds">
					<Grid
						container
						rowGap={4}
						sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<Grid item xs={12} md={5.5} lg={5.5}>
							<CommonAdsToggler
								onClick={handleChange}
								type={ADS_TYPES.TEXT_ADS}
								adsType={adsType}
								image={TextAdsImage}
								heading={'Text Ad'}
							/>
						</Grid>
						<Grid item xs={12} md={5.5} lg={5.5}>
							<CommonAdsToggler
								onClick={handleChange}
								type={ADS_TYPES.MEDIA_ADS}
								adsType={adsType}
								image={MediaAdsImage}
								heading={'Media Ad'}
							/>
						</Grid>
					</Grid>
				</Box>
			</Box>
		);
	}

	function renderForm() {
		return (
			<Grid container>
				<Grid
					item
					xs={12}
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						flexDirection: {
							xs: 'column',
							md: 'row',
						},
					}}>
					<Grid item xs={12} md={5.85} lg={5.85}>
						<Grid item xs={12}>
							<TextFieldWithHeading
								heading="Heading 01"
								placeholder="Add a heading that would make users interested"
								setState={(event: ChangeEvent<HTMLInputElement>) => {
									if (adsType === ADS_TYPES.TEXT_ADS) {
										setTextAds({ ...textAds, heading01: event.target.value });
									} else {
										setMediaAds({
											...mediaAds,
											heading01: event.target.value,
										});
									}
								}}
								state={
									adsType === ADS_TYPES.TEXT_ADS
										? textAds.heading01
										: mediaAds.heading01
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextFieldWithHeading
								heading="Heading 02"
								placeholder="Add a heading that would make users interested"
								setState={(event: ChangeEvent<HTMLInputElement>) => {
									if (adsType === ADS_TYPES.TEXT_ADS) {
										setTextAds({ ...textAds, heading02: event.target.value });
									} else {
										setMediaAds({
											...mediaAds,
											heading02: event.target.value,
										});
									}
								}}
								state={
									adsType === ADS_TYPES.TEXT_ADS
										? textAds.heading02
										: mediaAds.heading02
								}
							/>
						</Grid>
					</Grid>

					<Grid item xs={12} md={5.85} lg={5.85}>
						<TextFieldWithHeading
							heading="Description 01"
							placeholder="Add Primary text to help users understand more about your products,services or offers"
							setState={(event: ChangeEvent<HTMLInputElement>) => {
								if (adsType === ADS_TYPES.TEXT_ADS) {
									setTextAds({ ...textAds, description: event.target.value });
								} else {
									setMediaAds({
										...mediaAds,
										description: event.target.value,
									});
								}
							}}
							state={
								adsType === ADS_TYPES.TEXT_ADS
									? textAds.description
									: mediaAds.description
							}
						/>
					</Grid>
				</Grid>
				{adsType === ADS_TYPES.MEDIA_ADS && (
					<>
						<Grid
							item
							xs={12}
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								flexDirection: {
									xs: 'column',
									md: 'row',
								},
							}}>
							<Grid item xs={12} md={3.8} lg={3.8}>
								<TextFieldWithHeading
									heading="Landscape Marketing Image (1.9:1)"
									placeholder="Add the URL of the image you want to use for the ad"
									setState={(event: ChangeEvent<HTMLInputElement>) => {
										setMediaAds({
											...mediaAds,
											landscapeMarketingImage: event.target.value,
										});
									}}
									state={mediaAds.landscapeMarketingImage}
								/>
							</Grid>
							<Grid item xs={12} md={3.8} lg={3.8}>
								<TextFieldWithHeading
									heading="Potrait Marketing Image (4:5)"
									placeholder="Add the URL of the image you want to use for the ad"
									setState={(event: ChangeEvent<HTMLInputElement>) => {
										setMediaAds({
											...mediaAds,
											potraitMarketingImage: event.target.value,
										});
									}}
									state={mediaAds.potraitMarketingImage}
								/>
							</Grid>
							<Grid item xs={12} md={3.8} lg={3.8}>
								<TextFieldWithHeading
									heading="Square Marketing Image (1:1)"
									placeholder="Add the URL of the image you want to use for the ad"
									setState={(event: ChangeEvent<HTMLInputElement>) => {
										setMediaAds({
											...mediaAds,
											squareMarketingImage: event.target.value,
										});
									}}
									state={mediaAds.squareMarketingImage}
								/>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<TextFieldWithHeading
								heading="Video URL"
								placeholder="Add the URL of the video you want to use for the ad"
								setState={(event: ChangeEvent<HTMLInputElement>) => {
									setMediaAds({
										...mediaAds,
										videoUrl: event.target.value,
									});
								}}
								state={mediaAds.videoUrl}
							/>
						</Grid>
					</>
				)}

				<Grid
					item
					xs={12}
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						flexDirection: {
							xs: 'column',
							md: 'row',
						},
					}}>
					<Grid item xs={12} md={5.85} lg={5.85}>
						<TextFieldWithHeading
							heading="Business Name"
							placeholder="Add your business name"
							setState={(event: ChangeEvent<HTMLInputElement>) => {
								if (adsType === ADS_TYPES.TEXT_ADS) {
									setTextAds({
										...textAds,
										businessName: event.target.value,
									});
								} else {
									setMediaAds({
										...mediaAds,
										businessName: event.target.value,
									});
								}
							}}
							state={
								adsType === ADS_TYPES.TEXT_ADS
									? textAds.businessName
									: mediaAds.businessName
							}
						/>
					</Grid>
					<Grid item xs={12} md={5.85} lg={5.85}>
						<Box
							sx={{
								marginTop: {
									xs: '0.8rem',
									md: '1.05rem',
									lg: '1.2rem',
								},
							}}>
							<Heading
								heading={'Button Label'}
								fontWeight={500}
								fontSize={'17.5px'}
								color={COLORS.colorGrayDark}
							/>
						</Box>

						<FormControl
							sx={{
								width: '100%',
								marginTop: {
									xs: '0.4rem',
									md: '0.6rem',
									lg: '0.95rem',
								},
							}}>
							{!isValueSelected && (
								<InputLabel htmlFor="ads-label">
									Select a label that best suits your ads
								</InputLabel>
							)}
							<Select
								placeholder="Select a label that best suits your ads"
								value={
									adsType === ADS_TYPES.TEXT_ADS
										? textAds.buttonLabel
										: mediaAds.buttonLabel
								}
								onChange={(event: SelectChangeEvent<string>) => {
									if (adsType === ADS_TYPES.TEXT_ADS) {
										setTextAds({
											...textAds,
											buttonLabel: event.target.value,
										});
									} else {
										setMediaAds({
											...mediaAds,
											buttonLabel: event.target.value,
										});
									}
								}}>
								<MenuItem value={1}>Option 1</MenuItem>
								<MenuItem value={2}>Option 2</MenuItem>
								<MenuItem value={3}>Option 3</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>

				<Grid item xs={12}>
					<TextFieldWithHeading
						heading="Website URL"
						placeholder="Add the URL of the landing page you want to redirect users to"
						setState={(event: ChangeEvent<HTMLInputElement>) => {
							if (adsType === ADS_TYPES.TEXT_ADS) {
								setTextAds({
									...textAds,
									websiteURL: event.target.value,
								});
							} else {
								setMediaAds({
									...mediaAds,
									websiteURL: event.target.value,
								});
							}
						}}
						state={
							adsType === ADS_TYPES.TEXT_ADS
								? textAds.websiteURL
								: mediaAds.websiteURL
						}
					/>
				</Grid>
			</Grid>
		);
	}

	function createAdsContent() {
		switch (content) {
			case ADS_CONTENT.TOGGLER:
				return renderAdsToggler();
			case ADS_CONTENT.FORM:
				return renderForm();
			default:
				break;
		}
	}

	return (
		<Box
			className="createAdsWrapper"
			sx={{ padding: { lg: '1.5rem', md: '1rem', xs: '1rem' } }}>
			<Heading
				heading={
					content === ADS_CONTENT.TOGGLER ? 'Create Ads' : 'Create Text & Media'
				}
				fontWeight={500}
				fontSize={'21px'}
				color={COLORS.colorGrayDark}
			/>
			{createAdsContent()}
			<Box
				className="createAdsButtonWrapper"
				sx={{
					display: 'flex',
					justifyContent: {
						xs: 'center',
						md: 'flex-end',
					},
					marginTop: {
						xs: '1rem',
						md: '1.2rem',
						lg: '1.5rem',
					},
				}}>
				{content === ADS_CONTENT.TOGGLER && (
					<CommonButton
						buttonText="Next"
						backgroundColor={COLORS.colorBlue}
						onClick={() => setContent(ADS_CONTENT.FORM)}
						color={COLORS.colorWhite}
						isDisabled={adsType === null}
					/>
				)}

				{content === ADS_CONTENT.FORM && (
					<>
						<CommonButton
							buttonText="Back"
							backgroundColor={COLORS.colorBackground}
							onClick={() => setContent(ADS_CONTENT.TOGGLER)}
							color={COLORS.colorGrayDark}
							isDisabled={false}
						/>
						<CommonButton
							buttonText="Submit"
							backgroundColor={COLORS.colorBlue}
							onClick={handleFormSubmit}
							color={COLORS.colorWhite}
							isDisabled={false}
						/>
					</>
				)}
			</Box>
		</Box>
	);
};
export default CreateAds;
