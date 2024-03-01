import Header from '../../../layout/header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {useRef} from 'react';
import NewTaskForm from './NewTaskForm';
import {createTask} from '../../../../store/controllers/taskController';
import {useNavigate} from 'react-router-dom';

const CreateTask = () =>
{
	const team = useSelector(state => state.team.selectedTeam);
	const user = useSelector(state => state.user.activeUser);
	const btkn = useSelector(state => state.user.btoken);

	const ntaskRef = useRef({});
	const dispatch = useDispatch();
	const nav = useNavigate();

	const handleCreate = (e) =>
	{
		e.preventDefault();

		dispatch(createTask({
			userid: user.id,
			teamid: team.id,
			description: ntaskRef.current.description,
			title: ntaskRef.current.title,
			ttype: ntaskRef.current.type
		}, btkn, nav));
	};

	return <>
		<Header
			subtitleTxt={'Task will be created for a ' + team.label}
			titleTxt={'Create a new task'}
		/>

		<NewTaskForm ntaskRef={ntaskRef} handleCreate={handleCreate}/>
	</>
};

export default CreateTask;