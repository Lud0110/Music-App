import React from "react";
import '../styles/Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__brand">
                    <span>🎵</span>
                    <h3>MusicApp</h3>
                    <p>Descubre tu musica favorita</p>
                </div>
                <div className="footer__links">
                    <h4>Navegacion</h4>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#canciones">Canciones</a></li>
                        <li><a href="#artistas">Artistas</a></li>
                    </ul>
                </div>
                <div className="footer__liks">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#privacidad">Privacidad</a></li>
                        <li><a href="#terminos">Terminos</a></li>    
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <p>© Music App. No todos los derechos reservados</p>
            </div>
        </footer>
    );
}

export default Footer;