import { ADD_TO_CART, REMOVE_FROM_CART, GET_PRODUCTS, GET_PRODUCT_DETAIL } from '../constants';

const initialState = {
	products: [],
	cart: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};

		case ADD_TO_CART:
			const foundProduct = state.cart.find((prod) => prod.id === action.payload.id);
			if (!foundProduct) {
				return {
					...state,
					cart: [...state.cart, action.payload],
				};
			}

		case REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((prod) => prod.id !== action.payload),
			};

		default:
			return state;
	}
};
