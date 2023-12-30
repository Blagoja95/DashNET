import {configureStore} from '@reduxjs/toolkit';
import uiSlice from './slices/uiSlice';
import userSlice from './slices/userSlice';
import teamSlice from "./slices/teamSlice";

const store = configureStore({
	reducer: {
		ui: uiSlice.reducer,
		user: userSlice.reducer,
		team: teamSlice.reducer
	}
});

export default store;