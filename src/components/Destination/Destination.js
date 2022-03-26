import React from 'react';
import './Destination.css';
import { GiCommercialAirplane } from 'react-icons/gi'

const Destination = ({ destination, handleAddToCart }) => {
    const { location, img, country } = destination;
    return (
        <div className='destination'>
            <img src={img} alt="" />
            <p className='destination-name'>{location}</p>
            <p>Country: {country}</p>
            <button onClick={() => handleAddToCart(destination)} className='btn-cart'>
                <p className='btn-text'>Booking Now</p>
                <GiCommercialAirplane></GiCommercialAirplane>
            </button>
        </div>
    );
};

export default Destination;