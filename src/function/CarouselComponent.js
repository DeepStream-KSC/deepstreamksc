// CarouselComponent.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = ({ imageUrls }) => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
                {imageUrls.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            <div className="carousel-inner">
                {imageUrls.map((url, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={url} className="d-block w-100" alt={`Slide ${index + 1}`} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Slide {index + 1} label</h5>
                            <p>Some representative placeholder content for slide {index + 1}.</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default CarouselComponent;
