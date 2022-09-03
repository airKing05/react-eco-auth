import { ADD_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY } from "../constants/constants";

const initialState = [{

}];

export const cartData = (state = initialState ,action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            //console.log(state)
            return [action.payload, ...state]
        case REMOVE_FROM_CART: 
             let remainingData = state.filter((item) => item.id !== action.payload)
             return [...remainingData]
        case ADD_QUANTITY:
            let idMatch = state.filter((item) => item.id === action.payload)
            // return [sta]
        case SUB_QUANTITY:
            //console.log(state)
            return [action.payload, ...state]
        default:
            return state;   
    }
}