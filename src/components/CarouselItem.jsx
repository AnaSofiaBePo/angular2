import React from "react";
import "../assets/styles/components/CarouselItem.scss";
import play_icon from "../assets/static/play-icon.png";
import plus_icon from "../assets/static/plus-icon.png";

const CarouselItem = () => (
    <div className='carousel-item'>
        <img
            className='carousel-item__img'
            src='https://source.unsplash.com/featured/?rock,party"'
            alt='girls-party'
        />
        <div className='carousel-item__details'>
            <div>
                <img src={play_icon} alt='play' />
                <img src={plus_icon} alt='plus' />
            </div>
            <p className='carouel-item__details--title'>Titulo descriptivo</p>
            <p className='carouel-item__details--subtitle'>2020 18+ 40 min</p>
        </div>
    </div>
);
export default CarouselItem;
