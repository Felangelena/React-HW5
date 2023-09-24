import {FETCH_DATA, OPEN_MODAL, CLOSE_MODAL, ADD_TO_CART, DELETE_FROM_CART, TOOGLE_FAVORITES, CLEAR_CART } from "./actions.js";

const initialState = {
    openModal: false,
    data: [],
    id: 0,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DATA:
            return {
                ...state,
                data: [...state.data, ...action.payload]
            };

        case OPEN_MODAL:
            // console.log("open modal");
            document.body.classList.add('noscroll');
            return {
                ...state,
                openModal: true,
                id: action.payload
            };

        case CLOSE_MODAL:
            // console.log("close modal");
            document.body.classList.remove('noscroll');
            return {
                ...state,
                openModal: false
            };

        case ADD_TO_CART:
            // console.log("add to cart");
            document.body.classList.remove('noscroll');
            return {
                ...state,
                cart: [...new Set([...state.cart, action.payload])],
                openModal: false,
            };

        case DELETE_FROM_CART:
            // console.log("delete from cart");
            document.body.classList.remove('noscroll');
            return {
                ...state,
                cart: state.cart.filter((item) => item !== action.payload),
                openModal: false,
            };

        case TOOGLE_FAVORITES:
            // console.log("change favorite");
            if(!state.favorites.includes(action.payload)){
                return {
                    ...state,
                    favorites: [...new Set([...state.favorites, action.payload])],
                }
            } else {
                return {
                    ...state,
                    favorites: state.favorites.filter((item) => item !== action.payload),
                }
            }

        case CLEAR_CART:
            // console.log("clear cart");
            return {
                ...state,
                cart: []
            };

        default:
            return state;
    }
};

export default dataReducer;