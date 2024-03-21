import { useDispatch } from 'react-redux';
import Button from '../../ui/Button.jsx';
import { deleteItem } from './cartSlice.js';

function DeleteItem({ pizzaId }) {
	const dispatch = useDispatch();

	return (
		<Button onClick={() => dispatch(deleteItem(pizzaId))} type="small">
			Delete
		</Button>
	);
}

export default DeleteItem;
