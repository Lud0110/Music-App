import React, { useState, useEffect } from "react";
import ArtistCard from "./ArtistCard";
import { getArtists } from '../services/api';
import '../styles/ArtistSection.css'

function ArtistSection() {
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getArtists()
            .then((data) => {
                setArtists(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error al obtener artistas:', err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p style={{ textAling: 'center', color: '#b3b3b3' }}>Cargando artistas...</p>

    return (
        <section className="artists" id="artistas">
            <h2 className="artists__title">Artistas destacados</h2>
            <div className="artists__grid">
                {artists.map((artist) => (
                    <ArtistCard key={artist.id} artist={{
                        id: artist.id,
                        name: artist.name,
                        genre: artist.genre,
                        image: artist.image_url,
                    }} />
                ))}
            </div>
        </section>
    );
} 

export default ArtistSection;