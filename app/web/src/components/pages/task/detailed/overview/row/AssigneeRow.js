import {TableCell, TableRow} from '@mui/material';
import UserAvatar from '../../../../../ui/avatar/UserAvatar';

const AssigneeRow = ({task}) =>
{
	return <TableRow>
		<TableCell>
			Assignee
		</TableCell>

		<TableCell sx={{display: 'flex', gap: 1, alignItems: 'center', cursor: 'pointer', height: 57.5}}>
			<UserAvatar sx={{width: 24, height: 24}}
						data={{name: task.assagnedUser.fname + ' ' + task.assagnedUser.lname}}
						ref={null}/>
			{task.assagnedUser.fname + ' ' + task.assagnedUser.lname}
		</TableCell>
	</TableRow>
};

export default AssigneeRow;