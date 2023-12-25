import { Alert, Box, Button, Typography } from "@mui/material";

import InputGroup from "../../../ui/InputGroup";
import AuthContainer from "../AuthContainer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../store/slices/userSlice";
import { useRef, useState } from "react";

const Login = () => {
	const [error, setError] = useState("");
	const loginRef = useRef({});
	const dispatch = useDispatch();

	function loginHandler(e) {
		e.preventDefault();
		const { username, password } = loginRef.current;

		if (!username.value || !password.value) {
			setError("Fields can't be empty!");
			return;
		}

		dispatch(userActions.setActiveUser({ username: username.value, password: password.value }));
	}
	return (
		<AuthContainer desc="Please enter your username and password to login." type='login'>
			<Alert variant='filled' color='error' onClose={() => setError("")} sx={{mt: 1, display: error ? 'flex' : 'none'}}>{error}</Alert>
			<Box component='form' sx={{ mt: 5 }}>
				<InputGroup label="Username" type="text" inpRef={el => loginRef.current.username = el} />
				<InputGroup label="Password" type="password" inpRef={el => loginRef.current.password = el} />
				<Button type='submit'
					sx={{ bgcolor: 'white.main', color: 'grey.main', ":hover": { bgcolor: 'white.light', color: 'grey.dark' }, p: 1, my: 3, width: '100%', borderRadius: 1 }}
					onClick={loginHandler}>
					Login
				</Button>
				<Typography>Don't have an account?{' '}
					<Typography component={Link} to='/auth/register'
						sx={{
							color: 'primary.main', textDecoration: 'none',
							':hover': { textDecoration: 'underline' }
						}}>
						Register
					</Typography> instead
				</Typography>
			</Box>
		</AuthContainer>
	)
}
export default Login