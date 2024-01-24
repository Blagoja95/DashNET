import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	initialised: true,
	searchOpen: false,
	userMenuOpen: false,
	error: '',
	success: ''
}

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setInitialised(state, action) {
			state.initialised = action.payload;
		},
		setSearchOpen(state, action) {
			state.searchOpen = action.payload;
		},
		setUserMenuOpen: (state, action) => {
			state.userMenuOpen = action.payload;
		},
		setError(state, action) {
			state.error = action.payload;
		},
		setSuccess(state, action) {
			state.success = action.payload;
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