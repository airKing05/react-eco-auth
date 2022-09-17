import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "../constants/constants";

const initialState = [];

export const cartData = (state = initialState ,action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            //console.log(state)
            return [action.payload,  ...state]
            
        case REMOVE_FROM_CART: 
            for (let i=0; i < state.length; i++) {
                if (state[i].id === action.payload) {
                    state.splice(i, 1);
                    break;
                }
            }
            //  let remainingData = state.filter((item) => item.id !== action.payload)
             return [...state];
        
        case EMPTY_CART: 
             return state = [];
        default:
            return state;   
    }
}