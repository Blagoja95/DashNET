import { Box, Input, Typography } from "@mui/material"

const InputGroup = ({ label, type }) => {
	return (
		<Box sx={{ mb: 5, display: 'flex', alignItems: 'center', flex: 1 }}>
			<Typography component='p'
				sx={{ bgcolor: 'grey.main', color: 'white.light', p: 1.5, border: 1, borderColor: 'grey.main', textTransform: 'uppercase', textAlign: 'center', flex: 0.4}}>
				{label}
			</Typography>
			<Input
				sx={{ bgcolor: 'white.main', color: 'grey.main', px: 1, py: 1, border: 0, flex: 1 }}
				type={type}
				placeholder={`Please enter your ${label.toLowerCase()}...`} />
		</Box>
	)
}
export default InputGroup