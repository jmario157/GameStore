import React, { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            alert('Por favor, completa todos los campos');
        } else {
            // Aquí puedes realizar la lógica de autenticación, por ejemplo, hacer una solicitud a un servidor.
            // Si la autenticación es exitosa, redirige al usuario a la página "menu.html".
            window.location.href = 'menu.html';
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Email</label>
            </div>
            <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label>Password</label>
            </div>
            <div className="forget">
                <label>
                    <a href="#">Olvidé la Contraseña</a>
                </label>
            </div>
            <button type="submit">ENTRAR</button>
            <div className="register">
                <p>
                    No tienes cuenta <a href="#">Regístrate</a>
                </p>
            </div>
        </form>
    );
}

export default LoginForm;
