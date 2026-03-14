const API_URL = 'http://localhost:5000/api';

export const getSongs = async (genre = 'Todos') => {
    const url = genre === 'Todos'
        ? `${API_URL}/songs`
        : `${API_URL}/songs?genre=${genre}`;
    const response = await fetch(url);
    return response.json();
};

export const getArtists = async () => {
    const response = await fetch(`${API_URL}/artists`)
    return response.json();
};

export const login = async (email, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
};

export const register = async (username, email, password) => {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }), 
    });
    return response.json();
};