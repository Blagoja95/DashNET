import { Box, Typography } from "@mui/material"
import logo from '../../../assets/DashNET.svg';

const AuthContainer = ({ children, desc, type }) => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
			<Box sx={{ bgcolor: 'grey.main', borderRadius: 1, border: 2, borderColor: 'grey.light', p: 5 }}>
				<Box sx={{ my: 2, display: 'flex', alignItems: 'center' }}>
					<Typography variant="h4" >{type[0].toUpperCase() + type.slice(1)} to</Typography>
						<Box component='img' src={logo} sx={{width: 175, ml: 1}} />
				</Box>
				<Typography variant='body1' sx={{ color: 'white.main' }}>{desc}</Typography>
				{children}
			</Box>
		</Box>
	)
}
export default AuthContainer