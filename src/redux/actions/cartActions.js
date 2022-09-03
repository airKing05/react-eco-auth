import { ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, SUB_QUANTITY } from "../constants/constants";

export const addToCart = (data) =>{
    return {
        type: ADD_TO_CART,
        payload : data
    }
};

export const removeFromCart = (data) => {
    return {
        type: REMOVE_FROM_CART,
        payload: data
    }
}

export const addQuantity = (id) => {
    return{
        type: ADD_QUANTITY,
        payload: id
    }
}

export const subQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        payload: id
    }
}