import {useDispatch, useSelector} from 'react-redux';
import {useCookies} from 'react-cookie';
import { checkSession } from '../store/controllers/userController';

const useSession = () => {
	const dispatch = useDispatch();
	const [cookie] = useCookies(['JWTTKN']);

	if (!useSelector(state => state.user.sessionLoaded) && cookie?.JWTTKN && cookie.JWTTKN !== '')
	{
		dispatch(checkSession(cookie.JWTTKN));
	}
};

export default useSession;