import React from "react";
import SongCard from "../components/SongCard";
import '../styles/Home.css';

const songsData = [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', genre: 'Pop', image: 'https://picsum.photos/seed/song1/300/300' },
    { id: 2, title: 'HUMBLE.', artist: 'Kendrick Lamar', genre: 'Hip-Hop', image: 'https://picsum.photos/seed/song2/300/300' },
    { id: 3, title: 'Bohemian Rhapsody', artist: 'Queen', genre: 'Rock', image: 'https://picsum.photos/seed/song3/300/300' },
    { id: 4, title: 'Bad Guy', artist: 'Billie Eilish', genre: 'Pop', image: 'https://picsum.photos/seed/song4/300/300' },
    { id: 5, title: 'Strokes of Midnight', artist: 'Daft Punk', genre: 'Electrónica', image: 'https://picsum.photos/seed/song5/300/300' },
    { id: 6, title: 'La Bikina', artist: 'Luis Miguel', genre: 'Mexicana', image: 'https://picsum.photos/seed/song6/300/300' },
];

function Home({ category }) {
    const filtered = category === 'Todos'
        ? songsData
        : songsData.filter((s) => s.genre === category);

    return (
        <section className="home" id="canciones">
            <h2 className="home__title">Canciones</h2>
            {filtered.length === 0 ? (
                <p className="home__empty">No hay canciones en esta categoria.</p>
            ) : (
                <div className="home__grid">
                    {filtered.map((song) => (
                        <SongCard key={song.id} song={song} />
                    ))}
                </div>
            )}
        </section>
    );
}

export default Home