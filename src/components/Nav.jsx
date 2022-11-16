// import React from "react";
// import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav className="nav">
            <div className="container">
                <div className="logo">JOKER LOGO</div>
                <div className="menu">
                    <a href="#" className="login">
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
