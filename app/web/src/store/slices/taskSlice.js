import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	loadedTask: null,
	taskId: null,
	statusDefinition: {
		0: {
			name: 'Not started',
			color: 'secondary'
		},
		1: {
			name: 'In progress',
			color: 'primary'
		},
		2: {
			name: 'Review',
			color: 'warning'
		},
		3: {
			name: 'Done',
			color: 'success'
		}
	}
};

const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		setTask(state, action)
		{
			state.loadedTask = action.payload;
		},
		updateTaskPatch(state, action)
		{
			state.loadedTask[action.payload[0]] = action.payload[1];
		},
		setTaskId(state, action)
		{
			state.taskId = action.payload;
		},
		updatedLoadedTask(state, action)
		{
			if (state.loadedTask !== null)
			{
				state.loadedTask[action.payload[0]] = action.payload[1];
			}
		}
	}
});

export default taskSlice;

export const taskActions = taskSlice.actions;