import {useDispatch, useSelector} from 'react-redux';
import {useCookies} from 'react-cookie';
import {userActions} from '../../../store/slices/userSlice';
import axios from 'axios';

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
					dispatch(userActions.setActiveUser({email: r.data.email}));
					dispatch(userActions.setBToken(cookie.JWTTKN));
					dispatch(userActions.setSessionLoaded(true));
				}
			})
			.catch(e => {

			});
	}

	return null;
};

export default HandleSession;