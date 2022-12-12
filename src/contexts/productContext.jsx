import { createContext, useReducer, useState } from 'react'
import { productReducer } from '../reducers/productReducer'
import {
    apiUrl,
	PRODUCTS_LOADED_SUCCESS,
	PRODUCTS_LOADED_FAIL,
	ADD_PRODUCT,
	DELETE_PRODUCT,
	UPDATE_PRODUCT,
	FIND_PRODUCT
} from './constants'
import axios from 'axios'

export const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
	// State
	const [productState, dispatch] = useReducer(productReducer, {
		product: null,
		products: [],
		productsLoading: true
	})

	const [showAddProductModal, setShowAddProductModal] = useState(false)
	const [showUpdateProductModal, setShowUpdateProductModal] = useState(false)
	const [showToast, setShowToast] = useState({
		show: false,
		message: '',
		type: null
	})

	// Get all products
	const readAll = async () => {
		try {
			const response = await axios.get(`${apiUrl}/product/get`)
			if (response.data.success) {
				dispatch({ type: PRODUCTS_LOADED_SUCCESS, payload: response.data.products })
			}
		} catch (error) {
			console.log(error)
			dispatch({ type: PRODUCTS_LOADED_FAIL })
		}
	}

	// Add product
	const addProducts = async newProduct => {
		try {
			const response = await axios.post(`${apiUrl}/products`, newProduct)
			if (response.data.success) {
				dispatch({ type: ADD_PRODUCT, payload: response.data.product })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}

	// Delete product
	const deleteProducts = async productId => {
		try {
			const response = await axios.delete(`${apiUrl}/products/${productId}`)
			if (response.data.success)
				dispatch({ type: DELETE_PRODUCT, payload: productId })
		} catch (error) {
			console.log(error)
		}
	}

	// Find product when user is updating product
	const findProducts = productId => {
		const product = productState.products.find(product => product._id === productId)
		dispatch({ type: FIND_PRODUCT, payload: product })
	}

	// Update product
	const updateProducts = async updatedProduct => {
		try {
			const response = await axios.put(
				`${apiUrl}/products/${updatedProduct._id}`,
				updatedProduct
			)
			if (response.data.success) {
				dispatch({ type: UPDATE_PRODUCT, payload: response.data.product })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}
	
	// Product context data
	const productContextData = {
		productState,
		readAll,
		showAddProductModal,
        
		setShowAddProductModal,
		showUpdateProductModal,
		setShowUpdateProductModal,
		addProducts,
		showToast,
		setShowToast,
		deleteProducts,
		findProducts,
		updateProducts
	}

	return (
		<ProductContext.Provider value={productContextData}>
			{children}
		</ProductContext.Provider>
	)
}

export default ProductContextProvider