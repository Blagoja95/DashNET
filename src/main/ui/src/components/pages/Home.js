import { useDispatch, useSelector } from "react-redux"
import Card from "../ui/Card"
import { useEffect } from "react";
import { resetInitialised, uiActions } from "../../store/slices/uiSlice";

const Home = () => {
	const dispatch = useDispatch();

	const isInitialised = useSelector(state => state.ui.initialised);

	useEffect(() => {
		dispatch(uiActions.setInitialised(true));
		dispatch(resetInitialised());
	}, [dispatch]);

	useEffect(() => {
		console.log(isInitialised);
	}, [isInitialised]);
	return (
		<main>
			<Card />
		</main>
	)
}
export default Home