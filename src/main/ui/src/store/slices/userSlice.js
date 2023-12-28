import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	activeUser: { username: 'test', password: 'test' } // TODO: return default null
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