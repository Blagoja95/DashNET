import { Box, Button } from "@mui/material"
import InputGroup from "../../ui/InputGroup"
import Profession from "./Profession"
import { useRef } from "react"

const UserInformation = () => {
	const inputsRef = useRef({});

	function onSave() {
		const { fname, lname, email, profession } = inputsRef.current;
		console.log({ fname: fname.value, lname: lname.value, email: email.value, profession: profession.value });
	}
	return (
		<Box sx={{ borderRadius: 2, flex: 2, p: 5, bgcolor: 'grey.main' }}>
			<Box sx={{ display: 'flex', gap: 2 }}>
				<InputGroup label='First name' type='text' inpRef={el => inputsRef.current.fname = el} />
				<InputGroup label='Last name' type='text' inpRef={el => inputsRef.current.lname = el} />
			</Box>
			<Box sx={{ display: 'flex', gap: 2 }}>
				<InputGroup label='Email' type='email' inpRef={el => inputsRef.current.email = el} />
				<Profession inpRef={el => inputsRef.current.profession = el} />
			</Box>

			<Button sx={{
				bgcolor: 'white.main', color: 'grey.main', px: 2, mt: 2,
				borderRadius: 1, ":hover": { bgcolor: 'white.light' }
			}} onClick={onSave}>Save Changes</Button>
		</Box>
	)
}
export default UserInformation