import {Chip, TableCell, TableRow} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const TeamRow = ({team}) =>
{
	const nav = useNavigate();

	return <TableRow>
		<TableCell>
			Team
		</TableCell>
		<TableCell onClick={() => nav('/team/' + team.id)} sx={{cursor: 'pointer'}}>
			<Chip label={team.label}/>
		</TableCell>
	</TableRow>
};

export default TeamRow;