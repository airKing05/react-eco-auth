import React from 'react';
import { Navigate } from "react-router-dom";

export default function Protected(props) {
    const { Component} = props;
    // const navigateTo = useNavigate();
    
    let userAuth = localStorage.getItem('userAuth');
    if(!userAuth){
        return <Navigate to='/sign-in' replace={true}/>
    }
    return(
        <Component/>
    )
};


