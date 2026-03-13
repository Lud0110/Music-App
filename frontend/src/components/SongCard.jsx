import React from "react";
import '../styles/SongCard.css';

function SongCard({ song }) {
    return (
        <div className="song-card">
            <div className="song-card__image">
                <img src={song.image} alt={song.title} />
                <div className="song-card__overlay">
                    <button className="song-card__play">▶</button>
                </div>
            </div>
            <div className="song-card__info">
                <h3 className="song-card__title">{song.title}</h3>
                <p className="song-card__artist">{song.artist}</p>
                <span className="song-card__genre">{song.genre}</span>
            </div>
        </div>
    );
}

export default SongCard;