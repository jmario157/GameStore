import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from'react-router-dom';
import '../../App.css';

function Header() {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src="/img/pngwing.com.png" alt="Logo" />
                    <span>GAMESHUB</span>
                </div>
                <div className="buscador">
                    <input type="text" placeholder="Buscar..." />
                </div>
                <div className="idioma">
                    <a className="idioma__link" href="https://www.youtube.com/">
                        <i class="fa-solid fa-globe"></i>
                        <p>Español Latinoamérica</p>
                    </a>
                </div>
                <div className="carrito">
                    <a className="carrito__link" href="https://www.youtube.com/">
                        <i className="fa fa-shopping-cart"></i>
                    </a>
                </div>
                <div className="login-registro">
                    <a className="login-registro__link" to="LoginForm">
                        <span className="login-registro__content">
                            <i className="login-registro__icon fa fa-user-circle"></i>
                            <span className="login-registro__text">Iniciar sesión | Registrarse</span> 
                        </span>
                    </a>
                </div>
            </header>
            <nav className="subheader">
                <div className="subheader__list">
                    <div className="subheader__item" data-menu="tienda">
                        <a className="subheader__link" href="https://www.youtube.com/">Tienda</a>
                    </div>
                    <div className="subheader__item" data-menu="juegos">
                        <a className="subheader__link" href="../views/games.html">Juegos</a>
                    </div>
                    <div className="subheader__item" data-menu="pc">
                        <a className="subheader__link" href="https://www.youtube.com/">PC</a>
                    </div>
                    <div className="subheader__item" data-menu="xbox">
                        <a className="subheader__link" href="https://www.youtube.com/">XBOX</a>
                    </div>
                    <div className="subheader__item" data-menu="nintendo">
                        <a className="subheader__link" href="https://www.youtube.com/">Nintendo</a>
                    </div>
                    <div className="subheader__item" data-menu="nintendo">
                        <a className="subheader__link" href="https://www.youtube.com/">PSN</a>
                    </div>
                </div>
            </nav>
            <section className="gallery">
                <img src="/img/lordsfallen.jpg" alt="" />
                <img src="/img/the-legend-of-zelda-tears-of-the-kingdom_p893.jpg" alt="" />
                <img src="/img/diablo-4.jpg" alt="" />
                <img src="/img/starfield.jpg" alt="" />
                <img src="/img/Fifa.jpg" alt="" />
                <img src="/img/call_of_duty_modern_warfare_3.jpg" alt="" />
            </section>
        </div>
    );
}

export default Header;
