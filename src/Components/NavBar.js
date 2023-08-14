import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div>
            <h1 className="header">Budget and Save</h1>
            <nav>
                <NavLink className="navigation-links" exact to="/">Budget</NavLink>
                <NavLink className="navigation-links" to='/newentryform'>New Budget Item Form</NavLink>
                <NavLink className="navigation-links" to="/savings">Savings Goals</NavLink>
            </nav>
        </div>
    )
}

export default NavBar