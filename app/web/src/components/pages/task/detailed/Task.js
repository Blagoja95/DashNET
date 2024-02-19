import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getTaskDetails} from '../../../../store/controllers/taskController';
import TabNavigation from './navigation/TabNavigation';
import {taskActions} from '../../../../store/slices/taskSlice';
import TaskHeader from './navigation/TaskHeader';

const Task = () =>
{
	const id = document.URL.split('/').pop();
	const task = useSelector(state => state.task.loadedTask);
	const tkn = useSelector(state => state.user.btoken);

	const dispatch = useDispatch();

	useEffect(() =>
	{
		dispatch(taskActions.setTaskId(id));
		dispatch(getTaskDetails(id, tkn));
	}, [id]);

	return task !== null
		   ? <>
			   <TaskHeader/>
			   <TabNavigation/>
		   </>
		   : null;
};

export default Task;