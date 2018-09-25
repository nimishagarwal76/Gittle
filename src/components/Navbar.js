import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <ul class="nav navbar-nav">
                    <li ><Link to="/">Home</Link></li>
                    <li><Link to="/battle">Battle</Link></li>
                    
                </ul>                    
            </div>
        </nav>
    )
}

export default Navbar;