import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	initialised: true
}

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setInitialised(state, action) {
			state.initialised = action.payload;
		}
	}
})

export const resetInitialised = () => {
	return dispatch => {
		dispatch(uiActions.setInitialised(false));
	}
}

export default uiSlice;

export const uiActions = uiSlice.actions;