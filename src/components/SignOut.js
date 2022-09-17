import React from 'react';
import { Navigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { emptyCart } from '../../src/redux/actions/cartActions'

export default function SignOut() {
    localStorage.removeItem('userAuth');
    const dispatch = useDispatch();

    dispatch(emptyCart())

   return(
       <Navigate to="/sign-in" replace={true} />
   )
}
