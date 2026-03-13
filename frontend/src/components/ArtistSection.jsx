import React from "react";
import ArtistCard from "./ArtistCard";
import '../styles/ArtistSection.css'

const artistsData = [
    { id: 1, name: 'The Weeknd', genre: 'Pop / R&B', image: 'https://picsum.photos/seed/artist1/300/300' },
    { id: 2, name: 'Kendrick Lamar', genre: 'Hip-Hop', image: 'https://picsum.photos/seed/artist2/300/300' },
    { id: 3, name: 'Queen', genre: 'Rock', image: 'https://picsum.photos/seed/artist3/300/300' },
    { id: 4, name: 'Billie Eilish', genre: 'Pop', image: 'https://picsum.photos/seed/artist4/300/300' },
];

function ArtistSection() {
    return (
        <section className="artists" id="artistas">
            <h2 className="artists__title">Artistas destacados</h2>
            <div className="artists__grid">
                {artistsData.map((artist) => (
                    <ArtistCard key={artist.id} artist={artist}/>
                ))}
            </div>
        </section>
    );
} 

export default ArtistSection;