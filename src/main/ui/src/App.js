import { Route, Routes } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';
const App = () => {
	return (
		<>
		<Navigation />
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
		</>
	)
}
export default App
