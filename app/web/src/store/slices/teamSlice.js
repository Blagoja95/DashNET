import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	teams: [{id: 200, label: 'Back-end team'}, {id: 100, label: 'Technical documentation team'}, {id: 300, label: 'Front-end team'}],
	selectedTeam: {id: 100, label: 'Technical documentation team'},
	teamStats: null,
	teamTasks: []
};

const teamSlice = createSlice({
	name: 'team',
	initialState,
	reducers: {
		setTeams(state, action)
		{
			state.teams = action.payload;

			if (state.selectedTeam === null)
			{
				state.selectedTeam = state.teams[0];
			}
		},

		setTeamStats(state, action)
		{
			state.teamStats = action.payload;
		},

		setTeamTasks(state, action)
		{
			state.teamTasks = action.payload;
		},

		setSelectedTeam(state, action)
		{
			state.selectedTeam = action.payload;
		}
	}
});

export default teamSlice;

export const teamActions = teamSlice.actions;