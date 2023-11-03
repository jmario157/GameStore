import React from 'react';
import '../../App.css';

const Footer = () => {
    return (
        <div className="containerfooter">
            <h1 className="footer">Categorías</h1>
            <div className="cards-containerfooter">
                <div className="cardfooter">
                    <img src="https://assets.eneba.com/tag/v2/action.svg" alt="Acción" loading="lazy" />
                    <p>Acción</p>
                </div>
                <div className="cardfooter">
                    <img src="https://assets.eneba.com/tag/v2/adventure.svg" alt="Aventuras" loading="lazy" />
                    <p>Aventuras</p>
                </div>
                <div className="cardfooter">
                    <img src="https://assets.eneba.com/tag/v2/fps.svg" alt="FPS / TPS" loading="lazy" />
                    <p>FPS / TPS</p>
                </div>
                <div className="cardfooter">
                    <img src="https://assets.eneba.com/tag/v2/rpg.svg" alt="RPG" loading="lazy" />
                    <p>RPG</p>
                </div>
                <div className="cardfooter">
                    <img src="https://assets.eneba.com/tag/v2/indie.svg" alt="Indie" loading="lazy" />
                    <p>Indie</p>
                </div>
                <div className="cardfooter">
                    <img src="https://assets.eneba.com/tag/v2/simulation.svg" alt="Simulación" loading="lazy" />
                    <p>Simulación</p>
                </div>
                <div className="cardfooter">
                    <img src="https://assets.eneba.com/tag/v2/strategy.svg" alt="Estrategia" loading="lazy" />
                    <p>Estrategia</p>
                </div>
            </div>
            <button className="OlFsps w6wAha" type="button">Cargar más</button>
        </div>
    );
}

export default Footer;