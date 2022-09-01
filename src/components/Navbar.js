import React from 'react';
import { NavLink } from 'react-router-dom';
import { UilShoppingBag } from '@iconscout/react-unicons'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light px-3 py-3">
            <div className="container-fluid mx-5">
                <NavLink className="navbar-brand" to="/">React-Eco</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="me-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart"><UilShoppingBag/></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/feature">Sign-in</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/sign-up">Sign-up</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}