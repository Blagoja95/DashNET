import { Autocomplete, Box, Button, TextField, Tooltip } from "@mui/material";
import { AddCircle } from "@mui/icons-material";

const TeamHeader = ({controller, data, value, loading}) =>
{
	return <Box
		sx={{
			p: "1rem 1rem 0 1rem",
			display: "flex",
			justifyContent: "space-between"
		}}>
		<Tooltip title={`Create a new Task for the selected team${"teamName" ? "- " + "teamName" + "." : "."}`}>
			<Button
				onClick={controller.createTaskRedirect}>
				<AddCircle fontSize="small"/>
			</Button>
		</Tooltip>

		<Autocomplete
			disablePortal
			id="combo-box-teams"
			value={value}
			options={data}
			sx={{ width: 300 }}
			onChange={controller.handeValChange}
			renderInput={(params) => <TextField {...params} label="Overall for Team"/>}
		/>
	</Box>;
}

export default TeamHeader;