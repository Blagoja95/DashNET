import { Box, Tab, Tabs } from "@mui/material"
import Header from "../../layout/header/Header"
import ChangePassword from "./ChangePassword"
import UserInformation from "./UserInformation"
import UserAvatar from "./UserAvatar"
import { useState } from "react"

const Settings = () => {
	const [tabIdx, setTabIdx] = useState(0);
	return (
		<Box component='main'>
			<Header titleTxt="User Settings" subtitleTxt="Edit profile settings, upload avatar and more" />
			<UserAvatar />
			<Tabs
				value={tabIdx}
				onChange={(_e, newValue) => setTabIdx(newValue)}
				sx={{ my: 5, borderBottom: 1, borderColor: 'divider'}}
				indicatorColor='none'>
				<Tab
					label='User Information'
					aria-controls={`simple-tabpanel-${tabIdx}`}
					sx={{
						'&.Mui-selected':
							{  borderTopLeftRadius: 5, borderTopRightRadius: 5, borderBottom: 2 }
					}} />
				<Tab
					label='Change Password'
					aria-controls={`simple-tabpanel-${tabIdx}`}
					sx={{
						'&.Mui-selected':
							{ borderTopLeftRadius: 5, borderTopRightRadius: 5, borderBottom: 2 }
					}} />
			</Tabs>
			<Box component='div' role='tabpanel' hidden={tabIdx !== 0} sx={{ mx: '10%' }}>
				<UserInformation />
			</Box>
			<Box component='div' role='tabpanel' hidden={tabIdx !== 1} sx={{ mx: '10%' }}>
				<ChangePassword />
			</Box>
		</Box>
	)
}
export default Settings