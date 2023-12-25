import {configureStore} from '@reduxjs/toolkit';
import uiSlice from './slices/uiSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
	reducer: {
		ui: uiSlice.reducer,
		user: userSlice.reducer
	}
});

export default store;