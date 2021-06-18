import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from './redux/actions';
import ProductsContainer from './components/ProductsContainer';
import { Route } from 'react-router-dom';
import Cart from './components/Cart';
import { Navbar } from './components/Navbar';

function App({ getProducts, products }) {
	useEffect(() => {
		getProducts();
	}, [getProducts]);

	return (
		<>
			<Navbar />
			<Route exact path='/' render={() => <ProductsContainer />} />
			<Route path='/cart' render={() => <Cart />} />
		</>
	);
}

export default connect(null, { getProducts })(App);
