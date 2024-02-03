import { Alert, Box, Button } from "@mui/material"
import InputGroup from "../../ui/InputGroup"
import Profession from "./Profession"
import { uiActions } from "../../../store/slices/uiSlice"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteUser, updateUser } from "../../../store/controllers/userController"

const UserInformation = () => {
	const dispatch = useDispatch();

	const error = useSelector(state => state.ui.error);
	const success = useSelector(state => state.ui.success);
	const cookie = useSelector(state => state.user.btoken);

	const inputsRef = useRef({});
	const {id} = useSelector(state => state.ui.activeUser);

	function onSave() {
		const { fname, lname, email, profession } = inputsRef.current;

		if (!fname.value || !lname.value || !email.value || !profession.value) {
			dispatch(uiActions.setError("Fields are required!"));
			return false;
		}
		dispatch(updateUser(id, { fname: fname.value, lname: lname.value, email: email.value}, cookie));
	}

	function onDelete() {
		dispatch(deleteUser(id, cookie));
	}
	return (
		<Box sx={{ borderRadius: 2, flex: 2, p: 5, bgcolor: 'grey.main' }}>
			<Alert variant='filled' color='error' onClose={() => dispatch(uiActions.setError(""))} sx={{my: 1, display: error ? 'flex' : 'none'}}>{error}</Alert>
			<Alert variant='filled' color='success' onClose={() => dispatch(uiActions.setSuccess(""))} sx={{my: 1, display: success ? 'flex' : 'none'}}>{success}</Alert>
			<Box sx={{ display: 'flex', gap: 2 }}>
				<InputGroup label='First name' type='text' inpRef={el => inputsRef.current.fname = el} />
				<InputGroup label='Last name' type='text' inpRef={el => inputsRef.current.lname = el} />
			</Box>
			<Box sx={{ display: 'flex', gap: 2 }}>
				<InputGroup label='Email' type='email' inpRef={el => inputsRef.current.email = el} />
				<Profession inpRef={el => inputsRef.current.profession = el} />
			</Box>


			<Box sx={{display: 'flex', justifyContent: 'space-between'}}>
				<Button sx={{
					bgcolor: 'white.main', color: 'grey.main', px: 2, mt: 2,
					borderRadius: 1, ":hover": { bgcolor: 'white.light' }
				}} onClick={onSave}>Save Changes</Button>
				<Button sx={{bgcolor: 'error.dark', color: 'white.light', px: 2, mt: 2, borderRadius: 1, ":hover": {bgcolor: 'error.main'}}} onClick={onDelete}>Delete Account</Button>
			</Box>
		</Box>
	)
}
export default UserInformation