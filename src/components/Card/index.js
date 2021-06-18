import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actions';

const Card = ({ prod, addToCart, removeFromCart }) => {
	const location = useLocation();

	const handleClick = () => {
		if (location.pathname === '/cart') {
			removeFromCart(prod.id);
		} else {
			addToCart(prod);
		}
	};

	return (
		<div>
			<h2>{prod.title}</h2>
			<h3>${prod.price}</h3>
			<p>{prod.description}</p>
			<button onClick={handleClick}>
				{location.pathname === '/cart' ? 'Quitar del carrito' : 'Agregar al carrito'}
			</button>
		</div>
	);
};

export default connect(null, { addToCart, removeFromCart })(Card);
