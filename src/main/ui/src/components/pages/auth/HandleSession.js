import {useDispatch, useSelector} from 'react-redux';
import {useCookies} from 'react-cookie';
import {checkSession} from '../../../store/controllers/userController';

const HandleSession = () =>
{
	const dispatch = useDispatch();
	const [cookie, setCookie] = useCookies(['JWTTKN']);

	if (!useSelector(state => state.user.sessionLoaded) && cookie?.JWTTKN && cookie.JWTTKN !== '')
	{
		dispatch(checkSession(cookie.JWTTKN));
	}
};

export default HandleSession;