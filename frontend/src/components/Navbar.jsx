import React from "react";
import '../styles/Navbar.css';

function Navbar({ user, onLoginClick, onLogout }) {
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
                {user ? (
                    <div className="navbar__user">
                        <span className="navbar__username">Hola, {user.username}</span>
                        <button className="btn btn--logout" onClick={onLogout}>Salir</button>
                    </div>
                ) : (
                    <button className="btn btn--login" onClick={onLoginClick}>Iniciar sesion</button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;