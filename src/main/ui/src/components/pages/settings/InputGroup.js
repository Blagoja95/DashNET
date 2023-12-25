import { Box, Input, Typography } from "@mui/material"

const InputGroup = ({ label, type, inpRef }) => {
	return (
		<Box sx={{ flex: 1, mb: 2 }}>
			<Typography component='p'
				sx={{ bgcolor: 'grey.main', color: 'white.light', border: 1, borderColor: 'grey.main', mb: 2 }}>
				{label}
			</Typography>
			<Input color="grey" inputRef={inpRef}
				sx={{
					bgcolor: 'grey.dark', color: 'white.light', p: 1.3, width: '100%',
					border: 2, borderColor: 'grey.light', borderRadius: 1,
					':hover': { borderColor: 'white.light' }, ':focus-within': { borderColor: 'white.main' },
					'&.MuiInput-root:before': { border: 0 }, '&.MuiInput-root:hover': { ':before': { border: 0 } }
				}}
				type={type}
				placeholder={`Please enter your ${label.toLowerCase()}...`} />
		</Box>
	)
}
export default InputGroup