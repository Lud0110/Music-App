import React, { useState } from 'react';
import { login, register } from '../services/api';
import '../styles/Login.css';

function Login({ onLogin, onClose }) {
    const [isRegister, setIsRegister] = useState(false);
    const [form, setForm] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setError('');
        setLoading(true);
        try {
            if (isRegister) {
                const data = await register(form.username, form.email, form.password);
                if (data.message === 'Usuario registrado correctamente') {
                    setIsRegister(false);
                    setError('Registro exitoso');
                } else {
                    setError(data.message);
                }
            } else {
                const data = await login(form.email, form.password);
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    onLogin(data.user);
                    onClose();
                } else {
                    setError(data.message);
                }
            }
        } catch (err) {
            setError('Error de coneccion');
        }
        setLoading(false);
    };

    return (
        <div className="login__overlay">
            <div className="login__modal">
                <button className="login__close" onClick={onClose}>✕</button>
                <h2 className="login__title">{isRegister ? 'Crear cuenta' : 'Iniciar sesion'}</h2>

                {error && <p className="login__error">{error}</p>}

                {isRegister && (
                    <input 
                        className="login__input"
                        type='text'
                        name="username"
                        placeholder="Usuario"
                        value={form.username}
                        onChange={handleChange}
                    />
                )}    
                <input 
                    className="login__input"
                    type='email'
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                <input 
                    className="login__input"
                    type='password'
                    name="password"
                    placeholder="Contraseña"
                    value={form.password}
                    onChange={handleChange}
                />

                <button className="login__btn" onClick={handleSubmit} disabled={loading}>
                    {loading ? 'Cargando...' : isRegister ? 'Registrarse' : 'Entrar'}
                </button>

                <p className="login__switch">
                    {isRegister ? '¿Ya tienes una cuenta?' : '¿No tienes cuenta?'}
                    <span onClick={() => setIsRegister(!isRegister)}>
                        {isRegister ? 'Inicia sesion' : 'Registrate'}
                    </span>
                </p>
            </div>
        </div>
    );
} 

export default Login;