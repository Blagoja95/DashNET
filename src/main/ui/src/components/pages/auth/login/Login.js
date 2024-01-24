import { Alert, Box, Button, Typography } from "@mui/material";

import InputGroup from "../../../ui/InputGroup";
import AuthContainer from "../AuthContainer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { uiActions } from "../../../../store/slices/uiSlice";
import { loginUser } from "../../../../store/controllers/userController";

const Login = () => {
	const error = useSelector(state => state.ui.error);
	const success = useSelector(state => state.ui.success);
	const loginRef = useRef({});
	const dispatch = useDispatch();

	function loginHandler(e) {
		e.preventDefault();
		const { email, password } = loginRef.current;

		if (!email.value || !password.value) {
			dispatch(uiActions.setError("Fields can't be empty!"));
			return;
		}

		dispatch(loginUser({email: email.value, password: password.value}));
	}
	return (
		<AuthContainer desc="Please enter your username and password to login." type='login'>
			<Alert variant='filled' color='error' onClose={() => dispatch(uiActions.setError(""))} sx={{mt: 1, display: error ? 'flex' : 'none'}}>{error}</Alert>
			<Alert variant='filled' color='success' onClose={() => dispatch(uiActions.setSuccess(""))} sx={{mt: 1, display: success ? 'flex' : 'none'}}>{success}</Alert>
			<Box component='form' sx={{ mt: 5 }}>
				<InputGroup label="Email" type="email" inpRef={el => loginRef.current.email = el} />
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