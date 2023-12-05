import * as React from 'react';
import {Button} from '@mui/material';
const App = () => {
	return <>
		<Button >Hello</Button>
		<Button color='success' onClick={() => alert('HI')}>Success</Button>
		</>
}
export default App
