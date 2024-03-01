import axios from 'axios';
import {taskActions} from '../slices/taskSlice';

export const getTaskDetails = (id, tkn) =>
{
	return async(dispatch) =>
	{
		if(!id)
		{
			dispatch(taskActions.setTask(null));

			return;
		}

		axios.get('http://localhost:8080/tasks/' + id,
			{headers: {'Authorization': `Bearer ${tkn}`}})
			 .then(res =>
			 {
				 if(res.status === 200 && res.data.status)
				 {
					 dispatch(taskActions.setTask(res.data.data));
				 }
				 else
				 {
					 dispatch(taskActions.setTask(null));
				 }
			 })
			 .catch(e =>
			 {
				 dispatch(taskActions.setTask(null));

				 console.warn(e);
			 });
	}
}

export const updateTaskValuePatch = (tkn, id, property, value) =>
{
	const uo = {id: id};
	uo[property] = value;

	return (dispatch) =>
	{
		axios.patch('http://localhost:8080/tasks/update/' + property,
			JSON.stringify(uo),
			{
				headers: {
					'Authorization': `Bearer ${tkn}`,
					'Content-Type': 'application/json'
				}
			})
			 .then(res =>
			 {
				 if(res.status === 200 && res.data.status)
				 {
					 dispatch(taskActions.updateTaskPatch([property, res.data.data[property]]));
				 }
			 })
			 .catch(e =>
			 {
				 console.warn(e)
			 });
	}
}

export const deleteTask = (tkn, id, nav) =>
{
	return (dispatch) =>
	{
		axios.delete('http://localhost:8080/tasks/delete',
			{
				data: JSON.stringify({id: id}),
				headers: {
					'Authorization': `Bearer ${tkn}`,
					'Content-Type': 'application/json'
				}
			})
			 .then(res =>
			 {
				 if(res.status === 200 && res.data.status)
				 {
					 nav('/');

					 dispatch(taskActions.setTask(null));
				 }
			 })
			 .catch(e =>
			 {
				 console.warn(e)
			 });
	}
}

export const createTask = (data, tkn, nav) =>
{
	console.log(data, tkn);

	return async dispatch =>
	{
		axios.post('http://localhost:8080/tasks/create',
			JSON.stringify(data),
			{
				headers: {
					'Authorization': `Bearer ${tkn}`,
					'Content-Type': 'application/json'
				}
			})
			 .then(res =>
			 {
				 if(res.status === 200 && res.data.status)
				 {
					 nav('/task/' + res.data.data.id);
				 }
			 })
			 .catch(e =>
			 {
				 console.warn(e);
			 });
	}
}