import { Alert, Box, Button, Typography } from "@mui/material"
import AuthContainer from "../AuthContainer"
import InputGroup from "../../../ui/InputGroup"
import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { userActions } from "../../../../store/slices/userSlice"

const Register = () => {
	const [error, setError] = useState("");
	const registerRef = useRef({});
	const dispatch = useDispatch();

	function registerHandler(e) {
		e.preventDefault();

		const { fname, lname, username, email, password, passwordConfirm } = registerRef.current;
		if (!fname.value || !lname.value || !username.value || !email.value || !password.value || !passwordConfirm.value) {
			setError("Fields can't be empty!");
			return;
		}

		if (password.value !== passwordConfirm.value) {
			setError("Passwords don't match!");
			return;
		}
		dispatch(userActions.setActiveUser({ fname: fname.value, lname: lname.value, username: username.value, email: email.value, password: password.value, passwordConfirm: passwordConfirm.value }));
	}
	return (
		<AuthContainer desc="Please fill in your information to register." type='register'>
			<Alert variant='filled' color='error' onClose={() => setError("")} sx={{ mt: 1, display: error ? 'flex' : 'none' }}>{error}</Alert>
			<Box component='form' sx={{ mt: 5 }}>
				<Box sx={{ display: 'flex', gap: 2 }}>
					<InputGroup label="First name" type="text" inpRef={el => registerRef.current.fname = el} />
					<InputGroup label="Last name" type="text" inpRef={el => registerRef.current.lname = el} />
				</Box>
				<InputGroup label="Username" type="text" inpRef={el => registerRef.current.username = el} />
				<InputGroup label="Email" type="email" inpRef={el => registerRef.current.email = el} />
				<Box sx={{ display: 'flex', gap: 2 }}>
					<InputGroup label="Password" type="password" inpRef={el => registerRef.current.password = el} />
					<InputGroup label="Confirm Password" type="password" placeholder="Please confirm your password" inpRef={el => registerRef.current.passwordConfirm = el} />
				</Box>
				<Button type='submit'
					sx={{ bgcolor: 'white.main', color: 'grey.main', ":hover": { bgcolor: 'white.light', color: 'grey.dark' }, p: 1, my: 3, width: '100%', borderRadius: 1 }}
					onClick={registerHandler}>
					Register
				</Button>
				<Typography>Already have an account?{' '}
					<Typography component={Link} to='/auth/login'
						sx={{
							color: 'primary.main', textDecoration: 'none',
							':hover': { textDecoration: 'underline' }
						}}>
						Login
					</Typography> instead
				</Typography>
			</Box>
		</AuthContainer>
	)
}
export default Register