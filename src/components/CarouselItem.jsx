import React from "react";
import "../assets/styles/components/CarouselItem.scss";

const CarouselItem = () => (
    <div className='carousel-item'>
        <img
            className='carousel-item__img'
            src='https://source.unsplash.com/featured/?rock,party"'
            alt='girls-party'
        />
        <div className='carousel-item__details'>
            <div>
                <img src='../index/assets/play-icon.png' alt='play' />
                <img src='../index/assets/plus-icon.png' alt='plus' />
            </div>
            <p className='carouel-item__details--title'>Titulo descriptivo</p>
            <p className='carouel-item__details--subtitle'>2020 18+ 40 min</p>
        </div>
    </div>
);
export default CarouselItem;
