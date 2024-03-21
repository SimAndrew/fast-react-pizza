import LinkButton from '../../ui/LinkButton.jsx';
import Button from '../../ui/Button.jsx';
import CartItem from './CartItem.jsx';
import { useSelector } from 'react-redux';
import { getCart } from './cartSlice.js';

function Cart() {
	const username = useSelector((state) => state.user.username);
	const cart = useSelector(getCart);

	return (
		<div className="px-4 py-3">
			<LinkButton to="/menu">&larr; Back to menu</LinkButton>

			<h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

			<ul className="mt-3 divide-y divide-stone-200 border-b">
				{cart.map((item) => (
					<CartItem item={item} key={item.pizzaId} />
				))}
			</ul>

			<div className="mt-6 space-x-2">
				<Button to="/order/new" type="primary">
					Order pizzas
				</Button>

				<Button type="secondary">Clear cart</Button>
			</div>
		</div>
	);
}

export default Cart;
