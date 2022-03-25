import React from 'react';
import './Destination.css';

const Destination = ({ destination, handleAddToCart }) => {
    const { location, img, country } = destination;
    return (
        <div className='destination'>
            <img src={img} alt="" />
            <div className='destination-info'>
                <h3 className='destination-name'>{location}</h3>
                <p>Country: {country}</p>
            </div>
            <button onClick={() => handleAddToCart(destination)} className='btn-cart'>
                <p className='btn-text'>Booking Now</p>
                {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
            </button>
        </div>
    );
};

export default Destination;