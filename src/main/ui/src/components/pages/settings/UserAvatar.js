import { Avatar, Box, Button, Input } from "@mui/material"

const UserAvatar = () => {
	return (
		<Box sx={{ display: 'flex', gap: 2, alignItems: 'center', my: 2 }}>
			<Avatar sx={{ width: 100, height: 100 }} src="https://randomuser.me/api/portraits/lego/2.jpg" />
			<Button
				component='label'
				sx={{ bgcolor: 'grey.main', color: 'white.main', ":hover": { bgcolor: 'white.light', color: 'grey.dark' }, p: 1, borderRadius: 0 }}>
				Choose a file
				<Input type='file' sx={{ width: 0, height: 0 }} />
			</Button>
		</Box>
	)
}
export default UserAvatar