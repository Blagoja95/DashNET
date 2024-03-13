import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/slices/uiSlice';

const useSearch = () => {
	const activeUser = useSelector((state) => state.user.activeUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const handleKey = (e) => {
			if (activeUser && e.ctrlKey && e.key === '/') {
				e.preventDefault();
				dispatch(uiActions.setSearchOpen(true));
			}
		};

		document.addEventListener('keydown', handleKey);

		return () => document.removeEventListener('keydown', handleKey);
	}, [activeUser, dispatch]);
};
export default useSearch;
