import React from "react";
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <span></span>
                <h1>Music App</h1>
            </div>
            <ul className="navbar__links">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="canciones">Canciones</a></li>
                <li><a href="artistas">Artistas</a></li>
            </ul>
            <div className="navbar__auth">
                <button className="btn btn--login">Iniciar sesion</button>
            </div>
        </nav>
    );
}

export default Navbar;