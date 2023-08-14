import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <nav>
            <NavLink exact to="/">Budget</NavLink>
            <NavLink to="/savings">Savings Goals</NavLink>
            <NavLink to='/breakdown'>Spending Breakdown</NavLink>
        </nav>
    )
}

export default NavBar