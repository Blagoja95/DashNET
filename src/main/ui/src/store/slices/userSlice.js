import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	activeUser: null,
	btoken: ''
}

const userSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setActiveUser(state, action) {
			state.activeUser = action.payload;
		},
		setBToken(state, action) {
			state.btoken = action.payload;
		}
	}
});

export default userSlice;

export const userActions = userSlice.actions;