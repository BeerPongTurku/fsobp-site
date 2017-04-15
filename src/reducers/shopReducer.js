import * as types from '../actions/actionTypes';
import { browserHistory } from 'react-router';


const initialState = {
    usersOnline: 0,
    products: [],
    shoppingCart: [],
    shoppingCartPrice: 0.0,
    users: [],
    showModal: false
}

const insertItem = (array, item) => {
    let newArray = array.slice();
    newArray.splice(array.length, 0, item); // add item to the end of an array
    return newArray;
}
const removeItem = (array, index) => {
    let newArray = array.slice();
    newArray.splice(index, 1);
    return newArray;
}
const calculateShoppingCartPrice = (shoppingCart) => {
    let price = 0.0;
    shoppingCart.map = (product) => {
        price += product.price
    }
    return price;
}

export default function shopReducer(state = initialState, action) {

    let updatedShoppingCart = [];
    let shoppingCartPrice = 0;

    switch (action.type) {
        case types.RECEIVE_PRODUCTS:
            return Object.assign({}, state, {
                products: action.products,
                error: action.error
            })
        case types.RECEIVE_USERS:
            return Object.assign({}, state, {
                users: action.users,
                error: action.error
            })

        case types.ADD_PRODUCT_TO_CART:
            updatedShoppingCart = insertItem(state.shoppingCart, action.product);
            shoppingCartPrice = calculateShoppingCartPrice(updatedShoppingCart);
            return Object.assign({}, state, {
                shoppingCart: updatedShoppingCart,
                shoppingCartPrice: shoppingCartPrice
            })
        case types.REMOVE_PRODUCT_FROM_CART:
            updatedShoppingCart = removeItem(state.shoppingCart, action.index);
            shoppingCartPrice = calculateShoppingCartPrice(updatedShoppingCart);
            return Object.assign({}, state, {
                shoppingCart: updatedShoppingCart,
                shoppingCartPrice: shoppingCartPrice
            })
        case types.BUY_PRODUCTS:
            return Object.assign({}, state, {
                shoppingCart: [],
                shoppingCartPrice: 0
            })

        case types.DISPLAY_CONFIRMATION_MODAL:
            return Object.assign({}, state, {
                showModal: true
            })
        case types.HIDE_CONFIRMATION_MODAL:
            return Object.assign({}, state, {
                showModal: false
            })

        default:
            return state
    }
}