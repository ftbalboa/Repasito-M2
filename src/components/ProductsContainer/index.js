import { connect } from 'react-redux';
import Card from '../Card';

const ProductsContainer = ({ arrayProd }) => {
	return (
		<div>
			{arrayProd.map((prod) => (
				<Card prod={prod} />
			))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		arrayProd: state.products,
	};
};

export default connect(mapStateToProps)(ProductsContainer);
