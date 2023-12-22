import { Box, Button, Typography } from "@mui/material"
import InputGroup from "./InputGroup"

const UserInformation = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<Typography component='h3' sx={{ fontSize: '2rem', flex: 1.2 }}>User Information</Typography>
			<Box sx={{ border: 1, borderColor: 'divider', borderRadius: '2px', flex: 2, p: 5 }}>
				<Box sx={{ display: 'flex', gap: 2 }}>
					<InputGroup label='First name' type='text' />
					<InputGroup label='Last name' type='text' />
				</Box>
				<InputGroup label='Email' type='email' />
				<InputGroup label='Profession' type='text' />
				<Button sx={{ bgcolor: 'white.main', color: 'grey.main', ":hover": { bgcolor: 'white.light' }, px: 5, borderRadius: 0 }}>Save</Button>
			</Box>
		</Box>
	)
}
export default UserInformation