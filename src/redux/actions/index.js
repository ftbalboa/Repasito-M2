// get products
// agregar a carrito
// eliminar del carrito
// detalle de producto
import { ADD_TO_CART, REMOVE_FROM_CART, GET_PRODUCTS, GET_PRODUCT_DETAIL } from '../constants';

export function getProducts() {
	return function (dispatch) {
		console.log('DISPATCH');
		fetch('https://fakestoreapi.com/products/')
			.then((res) => res.json())
			.then((res) => {
				console.log(`res`, res);
				dispatch({ type: GET_PRODUCTS, payload: res });
			})
			.catch((err) => console.error(err));
	};
}

export function addToCart(prod) {
	return {
		type: ADD_TO_CART,
		payload: prod,
	};
}

export function removeFromCart(id) {
	return {
		type: REMOVE_FROM_CART,
		payload: id,
	};
}
