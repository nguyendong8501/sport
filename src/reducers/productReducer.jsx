import {
	PRODUCTS_LOADED_SUCCESS,
	PRODUCTS_LOADED_FAIL,
	ADD_PRODUCT,
	DELETE_PRODUCT,
	UPDATE_PRODUCT,
	FIND_PRODUCT
} from '../contexts/constants'

export const productReducer = (state, action) => {
	const { type, payload } = action
	switch (type) {
		case PRODUCTS_LOADED_SUCCESS:
			return {
				...state,
				products: payload,
				productsLoading: false
			}

		case PRODUCTS_LOADED_FAIL:
			return {
				...state,
				products: [],
				productsLoading: false
			}

		case ADD_PRODUCT:
			return {
				...state,
				products: [...state.products, payload]
			}

		case DELETE_PRODUCT:
			return {
				...state,
				products: state.products.filter(products => products._id !== payload)
			}

		case FIND_PRODUCT:
			return { ...state, products: payload }

		case UPDATE_PRODUCT:
			const newProducts = state.products.map(products =>
				products._id === payload._id ? payload : products
			)

			return {
				...state,
				products: newProducts
			}

		default:
			return state
	}
}