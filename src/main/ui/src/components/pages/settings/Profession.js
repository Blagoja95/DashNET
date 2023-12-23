import { Autocomplete, Box, TextField, Typography } from "@mui/material"

const Profession = ({ inpRef }) => {
	const professions = [
		'Software Engineer', 'QA Engineer', 'UI/UX Designer',
		'Project Manager', 'Product Manager', 'Scrum Master'];
	return (
		<Box sx={{ flex: 1, mb: 2 }}>
			<Typography component='p'
				sx={{ bgcolor: 'grey.main', color: 'white.light', border: 1, borderColor: 'grey.main', mb: 2 }}>
				Profession
			</Typography>
			<Autocomplete
				disablePortal
				options={professions}
				renderInput={(params) => <TextField placeholder="Please select a profession..." inputRef={inpRef}
					sx={{ bgcolor: 'grey.dark', '& fieldset': { border: 2, borderColor: 'grey.light' } }}
					color="white" {...params} />} />
		</Box>
	)
}
export default Profession