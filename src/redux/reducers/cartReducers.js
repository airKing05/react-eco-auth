import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/constants";

const initialState = [{
    title: "anilraj",
    price: "123456"
}];

export const cartData = (state = initialState ,action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            return [action.payload, ...state]
        case REMOVE_FROM_CART: 
             let remainingData = state.filter((item) => item.id !== action.payload)
             return [...remainingData]
        default:
            return state;   
    }
}