import { Box, Button } from "@mui/material"
import InputGroup from "../../ui/InputGroup"
import { useRef } from "react";

const ChangePassword = () => {
	const inputsRef = useRef({});

	function onChangePassword() {
		const { oldPw, oldPwConfirm, newPw, newPwConfirm } = inputsRef.current;
		console.log({
			oldPw: oldPw.value, oldPwConfirm: oldPwConfirm.value,
			newPw: newPw.value, newPwConfirm: newPwConfirm.value
		});
	}
	return (
		<Box sx={{ borderRadius: 2, flex: 2, p: 5, bgcolor: 'grey.main' }}>
			<Box sx={{ display: 'flex', gap: 2 }}>
				<InputGroup label='Old Password' type='password' inpRef={el => inputsRef.current.oldPw = el} />
				<InputGroup label='Old Password Confirm' type='password' inpRef={el => inputsRef.current.oldPwConfirm = el} />
			</Box>
			<Box sx={{ display: 'flex', gap: 2 }}>
				<InputGroup label='New Password' type='password' inpRef={el => inputsRef.current.newPw = el} />
				<InputGroup label='New Password Confirm' type='password' inpRef={el => inputsRef.current.newPwConfirm = el} />
			</Box>
			<Button
				variant={'contained'}
				sx={{ px: 2, mt: 2, borderRadius: 1 }}
				onClick={onChangePassword}>
				Change Password
			</Button>
		</Box>
	)
}
export default ChangePassword