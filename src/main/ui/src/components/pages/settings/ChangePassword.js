import { Box, Button, Typography } from "@mui/material"
import InputGroup from "./InputGroup"

const ChangePassword = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<Typography component='h3' sx={{ fontSize: '2rem', flex: 1.2 }}>Change Password</Typography>
			<Box sx={{ border: 1, borderColor: 'divider', borderRadius: '2px', flex: 2, p: 5 }}>
				<InputGroup label='Old Password' type='password' />
				<InputGroup label='New Password' type='password' />
				<InputGroup label='Confirm Password' type='password' />
				<Button sx={{ bgcolor: 'white.main', color: 'grey.main', ":hover": { bgcolor: 'white.light' }, px: 5, borderRadius: 0 }}>Save</Button>
			</Box>
		</Box>
	)
}
export default ChangePassword