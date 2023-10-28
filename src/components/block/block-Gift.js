import React from 'react';
import '../../App.css';

export const Gifts = () => {
    return (
        <div className="container">
            <div className="navigation">
                <button className="nav-button nav-button--left">
                    <svg width="9" height="15" viewBox="0 0 9 15">
                        <path fill="currentColor" fillRule="nonzero" d="M.65.64c-.2.20-.2.51 0 .70L7.24 7.5.65 13.66c-.2.19-.2.5 0 .70.21.19.55.19.75 0l6.95-6.5c.1-.10.15-.22.15-.35a.49.49 0 0 0-.15-.35L1.4.66A.54.54 0 0 0 .65.64z"></path>
                    </svg>
                </button>
                <div className="cards-container">
                    <h1 className="card-title">Gift Card Mas Vendidas</h1>
                    <div className="cards-wrapper">
                        <div className="card">
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/netflix1.jpeg" alt="Tarjeta 1" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">Netflix Gift Card</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/Razer.jpg" alt="Tarjeta 2" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">Netflix Gift Card</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/netflix2.jpeg" alt="Tarjeta 3" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">Netflix Gift Card</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/netflix1.jpeg" alt="Tarjeta 4" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">Netflix Gift Card</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/Razer.jpg" alt="Tarjeta 5" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">Netflix Gift Card</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/netflix2.jpeg" alt="Tarjeta 6" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">Netflix Gift Card</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/netflix1.jpeg" alt="Tarjeta 7" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">Netflix Gift Card</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/Razer.jpg" alt="Tarjeta 8" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">Netflix Gift Card</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/netflix2.jpeg" alt="Tarjeta 9" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">Netflix Gift Card</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="nav-button nav-button--right">
                    <svg width="9" height="15" viewBox="0 0 9 15">
                        <path fill="currentColor" fillRule="nonzero" d="M.65.64c-.2.20-.2.51 0 .70L7.24 7.5.65 13.66c-.2.19-.2.5 0 .70.21.19.55.19.75 0l6.95-6.5c.1-.10.15-.22.15-.35a.49.49 0 0 0-.15-.35L1.4.66A.54.54 0 0 0 .65.64z"></path>
                    </svg>
                </button>
            </div>
            <button className="show-all-button">Mostrar todo</button>
        </div>
    );
}

export default Gifts;