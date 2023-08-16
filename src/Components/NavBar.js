import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div>
            <h1 className="header">Budget and Save</h1>
            <nav>
                <NavLink className='navigation-links' exact to='/'>Home</NavLink>
                <NavLink className="navigation-links" exact to="/budget">Budget</NavLink>
                <NavLink className="navigation-links" to='/budget/new'>New Budget Item</NavLink>
                <NavLink className="navigation-links" exact to="/savings">Savings Goals</NavLink>
                <NavLink className="navigation-links" to="/savings/new">New Goal</NavLink>
            </nav>
        </div>
    )
}

export default NavBar