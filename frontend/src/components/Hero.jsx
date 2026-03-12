import React from "react";
import '../styles/Hero.css';

function Hero() {
    return (
        <section className="hero" id="inicio">
            <div className="hero__content">
                <h2 className="hero__title">Descubre tu musica favorita</h2>
                <p className="hero__subtitle">
                    Explora canciones, artistas y generos.
                </p>
                <button className="hero__btn">Explora ahora</button>
            </div>
        </section>
    );
}

export default Hero