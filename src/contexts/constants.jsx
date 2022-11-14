export const apiUrl =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:9090/api'
		: 'somedeloyedURL'

// export const LOCAL_STORAGE_TOKEN_NAME = 'learnit-mern'

export const PRODUCTS_LOADED_SUCCESS = 'PRODUCTS_LOADED_SUCCESS'
export const PRODUCTS_LOADED_FAIL = 'PRODUCTS_LOADED_FAIL'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const FIND_PRODUCT = 'FIND_PRODUCT'