import axios from 'axios';
import { uiActions } from '../slices/uiSlice';
import { userActions } from '../slices/userSlice';
export const registerUser = (data, onSuccess) => {

	return async dispatch => {
		axios.post('http://localhost:8080/users/register', data)
		.then(res => {
			dispatch(uiActions.setSuccess(res.data.message));
			onSuccess();
		})
		.catch(err => {
			dispatch(uiActions.setError(err.response.data.message));
		})
	}
}

export const loginUser = (data) => {
	return async dispatch => {
		axios.post('http://localhost:8080/users/login', data)
		.then(res => {
			const {message, user, token} = res.data;
			dispatch(uiActions.setSuccess(message));
			dispatch(userActions.setActiveUser(user));
			console.log(token);
		})
		.catch(err => {
			dispatch(uiActions.setError(err.response.data.message));
		})
	}
}