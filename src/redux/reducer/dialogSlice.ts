import { createSlice } from '@reduxjs/toolkit';
import { DIALOG_TYPE } from '../../common/interface';

const initialState = {
	config: {
		isOpen: false,
		message: '',
		status: DIALOG_TYPE.EMPTY,
	},
};
const dialogSlice = createSlice({
	name: 'dialog',
	initialState,
	reducers: {
		setDialogBox: (state, action) => {
			state.config = action.payload;
		},
		resetDialogBox: (state) => {
			state.config = initialState.config;
		},
	},
});
export const { setDialogBox, resetDialogBox } = dialogSlice.actions;
export default dialogSlice.reducer;
