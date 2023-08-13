import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div>
            <NavLink exact to="/">Budget</NavLink>
            <NavLink to="/savings">Savings Goals</NavLink>
            <NavLink to='/breakdown'>Spending Breakdown</NavLink>
        </div>
    )
}

export default NavBar