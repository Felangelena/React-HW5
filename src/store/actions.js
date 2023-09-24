export const FETCH_DATA = 'FETCH_DATA';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const TOOGLE_FAVORITES = 'TOOGLE_FAVORITES';
export const CLEAR_CART = 'CLEAR_CART';


export const fetchDataAC = (data) => ({type: FETCH_DATA, payload: data});
export const openModalAC = (id) => ({type: OPEN_MODAL, payload: id});
export const closeModalAC = () => ({type: CLOSE_MODAL});
export const addToCartAC = (id) => ({type: ADD_TO_CART, payload: id});
export const deleteFromCartAC = (id) => ({type: DELETE_FROM_CART, payload: id});
export const toogleFavoritesAC = (id) => ({type: TOOGLE_FAVORITES, payload: id});
export const clearCartAC = () => ({type: CLEAR_CART});

export const fetchDataThunk = () => {
    return async (dispatch) => {
        const response = await fetch('./storeData.json');
        const data = await response.json();

        dispatch(fetchDataAC(data));
    }
};