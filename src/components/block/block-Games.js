import React from 'react';
import { motion } from 'framer-motion';
import '../../App.css';

export const Games = () => {
    const scrollContainerRef = React.useRef();

    const handleScroll = (scrollOffset) => {
        scrollContainerRef.current.scrollLeft += scrollOffset;
    };

    return (
        <div className="container">
            <div className="navigation">
                <button
                    className="arrow-button left-arrow"
                    onClick={() => handleScroll(-200)} // Scroll hacia la izquierda
                >
                    &lt;
                </button>
                <div className="cards-container" ref={scrollContainerRef}>
                    <div className="cards-wrapper">
                        {/* Tarjeta 1 */}
                        <motion.div
                            className="card"
                            initial={{ scale: 0.9 }}
                            whileHover={{ scale: 1.0 }}
                        >
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/MortalKombat.jpeg" alt="Tarjeta 1" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">Mortal Kombat 11</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </motion.div>

                        {/* Tarjeta 2 */}
                        <motion.div
                            className="card"
                            initial={{ scale: 0.9 }}
                            whileHover={{ scale: 1.0 }}
                        >
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/Fifa.jpg" alt="Tarjeta 2" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">FIFA 24</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </motion.div>

                        {/* Tarjeta 3 */}
                        <motion.div
                            className="card"
                            initial={{ scale: 0.9 }}
                            whileHover={{ scale: 1.0 }}
                        >
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/Call Of Duty.jpg" alt="Tarjeta 3" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">Call Of Duty</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </motion.div>

                        {/* Tarjeta 4 */}
                        <motion.div
                            className="card"
                            initial={{ scale: 0.9 }}
                            whileHover={{ scale: 1.0 }}
                        >
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/Fifa.jpg" alt="Tarjeta 4" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">FIFA 24</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </motion.div>

                        {/* Tarjeta 5 */}
                        <motion.div
                            className="card"
                            initial={{ scale: 0.9 }}
                            whileHover={{ scale: 1.0 }}
                        >
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/Call Of Duty.jpg" alt="Tarjeta 5" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">Call Of Duty</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </motion.div>

                        {/* Tarjeta 6 */}
                        <motion.div
                            className="card"
                            initial={{ scale: 0.9 }}
                            whileHover={{ scale: 1.0 }}
                        >
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/Fifa.jpg" alt="Tarjeta 6" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">FIFA 24</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </motion.div>

                        {/* Tarjeta 7 */}
                        <motion.div
                            className="card"
                            initial={{ scale: 0.9 }}
                            whileHover={{ scale: 1.0 }}
                        >
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/Call Of Duty.jpg" alt="Tarjeta 7" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">Call Of Duty</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </motion.div>

                        {/* Tarjeta 8 */}
                        <motion.div
                            className="card"
                            initial={{ scale: 0.9 }}
                            whileHover={{ scale: 1.0 }}
                        >
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/MortalKombat.jpeg" alt="Tarjeta 8" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">Mortal Kombat 11</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </motion.div>

                        {/* Tarjeta 9 */}
                        <motion.div
                            className="card"
                            initial={{ scale: 0.9 }}
                            whileHover={{ scale: 1.0 }}
                        >
                            <div className="like-overlay"><i className="fa fa-heart"></i></div>
                            <div className="card__image">
                                <img src="/img/Fifa.jpg" alt="Tarjeta 9" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">FIFA 24</h2>
                                <p className="card__description">Desde 150 Lps</p>
                                <a className="card__link" href="#">
                                    Ver más
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <button
                    className="arrow-button right-arrow"
                    onClick={() => handleScroll(200)} // Scroll hacia la derecha
                >
                    &gt;
                </button>
            </div>
            <h1 className="card-title">Juegos Mas Vendidos</h1>
            {/* Botón "Mostrar todo" al final del contenedor */}
            <button className="show-all-button">Mostrar todo</button>
        </div>
    );
}

export default Games;