import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

	}
});

export default taskSlice;

export const taskAction = taskSlice.actions;