import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	teams: [],
	selectedTeam: null
};

const teamSlice = createSlice({
	name: 'team',
	initialState,
	reducers: {
		setTeams(state, action)
		{
			state.teams = action.payload;

			state.selectedTeam = state.teams[0];
		},

		setSelectedTeam(state, action)
		{
			state.selectedTeam = action.payload;
		}
	}
});

export default teamSlice;

export const teamActions = teamSlice.actions;