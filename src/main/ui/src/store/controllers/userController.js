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
			dispatch(userActions.setSessionLoaded(true));

			setCookie('JWTTKN', token);
		})
		.catch(err => {
			dispatch(uiActions.setError(err.response.data.message));
		});
	}
}

export const updateUser = (id, user, cookie) => {
	return async dispatch => {
		axios.put('http://localhost:8080/users/' + id, user, {
			headers: {
				Authorization: `Bearer ${cookie}`
			}
		})
		.then(res => {
			dispatch(userActions.setActiveUser(res.data.user));
			dispatch(uiActions.setSuccess("User successfully updated."));
		})
		.catch(err => {
			dispatch(uiActions.setError(err.response.data.message));
		});
	}
}

export const deleteUser = (id, cookie) => {
	return async dispatch => {
		axios.delete('http://localhost:8080/users/' + id, {
			headers: {
				Authorization: `Bearer ${cookie}`
			}
		})
		.then(res => {
			dispatch(userActions.setActiveUser(null));
			dispatch(userActions.setBToken(""));
			dispatch(userActions.setSessionLoaded(false));
			dispatch(uiActions.setSuccess("Your account has been successfully deleted."));
		})
		.catch(err => {
			dispatch(uiActions.setError(err.response.data.message));
		})
	}
}