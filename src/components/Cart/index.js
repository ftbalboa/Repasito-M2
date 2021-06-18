import { connect } from 'react-redux';
import Card from '../Card';

const Cart = ({ arrayCart }) => {
	return (
		<div>
			{arrayCart.map((prod) => (
				<Card prod={prod} />
			))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		arrayCart: state.cart,
	};
};

export default connect(mapStateToProps)(Cart);
