import React from 'react';
import { motion } from 'framer-motion';
import '../../App.css';

export const Relases = ({ data }) => {
  const scrollContainerRef = React.useRef();
  const { scrollStep, items } = data;

  const handleScroll = (scrollOffset) => {
    scrollContainerRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="main">
      <div className="container">
        <div className="navigation">
          <button
            className="arrow-button left-arrow"
            onClick={() => handleScroll(-scrollStep)} // Scroll hacia la izquierda
          >
            &lt;
          </button>
          <div className="cards-container" ref={scrollContainerRef}>
            <div className="cards-wrapper">
              {items.map((item, index) => (
                <motion.div
                  className="card"
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1.0 }}
                  key={index}
                >
                  <div className="like-overlay"><i className="fa fa-heart"></i></div>
                  <div className="card__image">
                    <img src={item.imageSrc} alt={`Tarjeta ${index + 1}`} />
                  </div>
                  <div className="card__content">
                    <h2 className="card__title">{item.title}</h2>
                    <p className="card__description">{item.description}</p>
                    <a className="card__link" href={item.link}>
                      Ver más
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <button
            className="arrow-button right-arrow"
            onClick={() => handleScroll(scrollStep)} // Scroll hacia la derecha
          >
            &gt;
          </button>
        </div>
        <h1 className="card-title">Proximos Lanzamientos</h1>
        <button className="show-all-button">Mostrar todo</button>
      </div>
    </div>
  );
}

export default Relases;
