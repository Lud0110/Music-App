import React, { useState } from "react";
import '../styles/CategoryFilter.css';

const categories = ['Todos', 'Pop', 'Rock', 'Hip-Hop', 'Electronica', 'Mexicana'];

function CategoryFylter({ onCategoryChange }) {
    const [active, setActive] = useState('Todos');

    const handleClick = (category) => {
        setActive(category);
        onCategoryChange(category);
    };

    return (
        <section className="categories" id="canciones">
            <h2 className="categories__title">Generos</h2>
            <div className="categories__filters">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`categories__btn ${active === cat ? 'categories__btn--active' : ''}`}
                        onClick={() => handleClick(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default CategoryFylter