import axios from 'axios';
import { uiActions } from '../slices/uiSlice';
import { userActions } from '../slices/userSlice';
export const registerUser = (data, onSuccess) => {

	return async dispatch => {
		axios.post('http://localhost:8080/users/register', data)
		.then(res => {
			dispatch(uiActions.setSuccess(res.data.message));
			onSuccess(res);
		})
		.catch(err => {
			dispatch(uiActions.setError(err.response.data.message));
		})
	}
}

	export const loginUser = (data, setCookie) => {
	return async dispatch => {
		axios.post('http://localhost:8080/users/login', data)
		.then(res => {
			const {message, user, token} = res.data;
			dispatch(uiActions.setSuccess(message));
			dispatch(userActions.setActiveUser(user));
			dispatch(userActions.setBToken(token))

			setCookie('JWTTKN', token);
		})
		.catch(err => {
			dispatch(uiActions.setError(err.response.data.message));
		});

	}
}