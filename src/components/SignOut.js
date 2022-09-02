import React from 'react';
import { Navigate } from "react-router-dom";

export default function SignOut() {
    localStorage.removeItem('userAuth');
   return(
       <Navigate to="/sign-in" replace={true} />
   )
}