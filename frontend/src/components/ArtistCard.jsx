import React from "react";
import '../styles/ArtistCard.css'

function ArtistCard({ artist }) {
    return (
        <div className="artist-card">
            <div className="artist-card__image">
                <img src={artist.image} alt={artist.name}/>
            </div>
            <h3 className="artist-card__name">{artist.name}</h3>
            <p className="artist-card__genre">{artist.genre}</p>
        </div>
    );
}

export default ArtistCard;