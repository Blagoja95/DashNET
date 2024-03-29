import { Alert, Box, Button } from "@mui/material"
import InputGroup from "../../ui/InputGroup"
import Profession from "./Profession"
import { uiActions } from "../../../store/slices/uiSlice"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteUser, updateUser } from "../../../store/controllers/userController"
import { useCookies } from "react-cookie"

const UserInformation = () => {
	const dispatch = useDispatch();

	const error = useSelector(state => state.ui.error);
	const success = useSelector(state => state.ui.success);
	const [cookie, setCookie, removeCookie] = useCookies(['JWTTKN']);

	const inputsRef = useRef({});
	const activeUser = useSelector(state => state.user.activeUser);

	function onSave() {
		const { fname, lname, email, profession } = inputsRef.current;

		if (!fname.value || !lname.value || !email.value || !profession.value) {
			dispatch(uiActions.setError("Fields are required!"));
			return false;
		}
		dispatch(updateUser(activeUser.id, { fname: fname.value, lname: lname.value, email: email.value}, cookie.JWTTKN));
	}

	function onDelete() {
		dispatch(deleteUser(activeUser.id, cookie.JWTTKN, removeCookie));
	}
	return (
		<Box sx={{ borderRadius: 2, flex: 2, p: 5, bgcolor: 'grey.main' }}>
			<Alert variant='filled' color='error' onClose={() => dispatch(uiActions.setError(""))} sx={{my: 1, display: error ? 'flex' : 'none'}}>{error}</Alert>
			<Alert variant='filled' color='success' onClose={() => dispatch(uiActions.setSuccess(""))} sx={{my: 1, display: success ? 'flex' : 'none'}}>{success}</Alert>
			<Box sx={{ display: 'flex', gap: 2 }}>
				<InputGroup label='First name' type='text' inpRef={el => inputsRef.current.fname = el} defaultValue={activeUser.fname} />
				<InputGroup label='Last name' type='text' inpRef={el => inputsRef.current.lname = el} defaultValue={activeUser.lname} />
			</Box>
			<Box sx={{ display: 'flex', gap: 2 }}>
				<InputGroup label='Email' type='email' inpRef={el => inputsRef.current.email = el} defaultValue={activeUser.email} />
				<Profession inpRef={el => inputsRef.current.profession = el} defaultValue="Software Engineer" />
			</Box>


			<Box sx={{display: 'flex', justifyContent: 'space-between'}}>
				<Button sx={{ px: 2, mt: 2, borderRadius: 1}}
						onClick={onSave}
						variant={'contained'}>
					Save Changes
				</Button>
				<Button sx={{bgcolor: 'error.dark', color: 'white.light', px: 2, mt: 2, borderRadius: 1, ":hover": {bgcolor: 'error.main'}}} onClick={onDelete}>Delete Account</Button>
			</Box>
		</Box>
	)
}
export default UserInformation