import axios from 'axios';
import {taskAction} from '../slices/taskSlice';

export const getTaskDetails = (id, tkn) =>
{
	return async (dispatch) =>
	{
		if (!id)
		{
			dispatch(taskAction.setTask(null));

			return;
		}

		axios.get('http://localhost:8080/tasks/' + id,
			{headers: {'Authorization': `Bearer ${tkn}`}})
			.then(res =>
			{
				if (res.status === 200 && res.data.status)
				{
					dispatch(taskAction.setTask(res.data.data));
				} else
				{
					dispatch(taskAction.setTask(null));
				}
			})
			.catch(e =>
			{
				dispatch(taskAction.setTask(null));

				console.warn(e);
			});
	}
}