import React from "react";
import { Link } from "react-router-dom";

const Nav = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Chihuahua Clicker</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/submit">Submit</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Nav;