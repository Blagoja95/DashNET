import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	activeUser: null
}

const userSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setActiveUser(state, action) {
			state.activeUser = action.payload;
		}
	}
});

export default userSlice;

export const userActions = userSlice.actions;