import { ADD_TO_CART, REMOVE_FROM_CART} from "../constants/constants";

export const addToCart = (data) =>{
    return {
        type: ADD_TO_CART,
        payload : data
    }
};

export const removeFromCart = (data) => {
    console.log("remove from cart", data);
    return {
        type: REMOVE_FROM_CART,
        payload: data
    }
}
