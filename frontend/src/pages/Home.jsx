import React, { useState, useEffect } from 'react';
import SongCard from '../components/SongCard';
import { getSongs } from '../services/api';
import '../styles/Home.css';

const ITEMS_PER_PAGE = 6;

function Home({ category }) {
    const [songs, setSongs] = useState([]);
    const [visible, setVisible] = useState(ITEMS_PER_PAGE);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setVisible(ITEMS_PER_PAGE);
        getSongs(category)
            .then((data) => {
                setSongs(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error al obtener cnciones', err);
                setLoading(false);
            });
    }, [category]);

    if (loading) return <p className="home__empty">Cargando canciones...</p>;

    return (
        <section className="home" id="canciones">
            <h2 className="home__title">Canciones</h2>
            {songs.length === 0 ? (
                <p className="home__empty">No hay canciones en esta categoria</p>
            ) : (
                <>
                <div className="home__grid">
                    {songs.slice(0, visible).map((song) => (
                        <SongCard
                            key={song.id}
                            song={{
                                id: song.id,
                                tittle: song.title,
                                artist: song.artist_name,
                                genre: song.genre,
                                image: song.image_url,
                            }}
                        />
                    ))}
                </div>
                {visible < songs.length && (
                    <div className="home__more">
                        <button
                            className="home__more-btn"
                            onClick={() => setVisible(visible + ITEMS_PER_PAGE)}
                        >
                            Ver mas
                        </button>
                    </div>
                )}
                </>
            )}
        </section>
    );
} 

export default Home;