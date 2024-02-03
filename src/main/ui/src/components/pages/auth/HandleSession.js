import {useDispatch, useSelector} from 'react-redux';
import {useCookies} from 'react-cookie';
import {userActions} from '../../../store/slices/userSlice';
import axios from 'axios';
import {uiActions} from "../../../store/slices/uiSlice";

const HandleSession = () =>
{
	const dispatch = useDispatch();
	const [cookie, setCookie] = useCookies(['JWTTKN']);

	if (!useSelector(state => state.user.sessionLoaded) && cookie?.JWTTKN && cookie.JWTTKN !== '')
	{
		axios
			.get('http://localhost:8080/users/token',
				{headers: {'Authorization': `Bearer ${cookie.JWTTKN}`}})
			.then(r => {

				if (r.data.status === 1) {
					dispatch(userActions.setActiveUser(r.data.user));
					dispatch(userActions.setBToken(cookie.JWTTKN));
					dispatch(userActions.setSessionLoaded(true));
				}
			})
			.catch(e =>
			{
				dispatch(uiActions.setError(e.response.data?.message ?? 'Something went wrong!'));
			});
	}

	return null;
};

export default HandleSession;