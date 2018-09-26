import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li ><Link to="/">Home</Link></li>
                    <li><NavLink to="/battle">Battle</NavLink></li>
                    
                </ul>                    
            </div>
        </nav>
    )
}

export default Navbar;