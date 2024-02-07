import { Avatar, Box, Button, Input } from "@mui/material"
import { useRef } from "react"

const UserAvatar = () => {
	const avatarRef = useRef();
	return (
		<Box sx={{ display: 'flex', gap: 2, alignItems: 'center', my: 2 }}>
			<Avatar sx={{ width: 100, height: 100 }} src="https://randomuser.me/api/portraits/lego/2.jpg" />
			<Button
				component='label'
				sx={{ bgcolor: 'grey.main', color: 'white.main', ":hover": { bgcolor: 'white.light', color: 'grey.dark' }, p: 1, borderRadius: 1 }}>
				Choose a file
				<Input type='file' sx={{ width: 0, height: 0 }} inputRef={avatarRef} onChange={() => console.log(avatarRef.current.value)} />
			</Button>
		</Box>
	)
}
export default UserAvatar