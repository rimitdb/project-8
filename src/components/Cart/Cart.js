import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    const { location, img } = cart;
    return (
        <div className='cart'>
            <div>
                <h4>Selected Destination</h4>
                <p>{location}</p>
                <img src={img} alt="" />
            </div>
            <div>
                {cart.map(item => (<h4 key={item.id}>{item.location}</h4>)
                )}
            </div>

            <div>
                <button>CHOOSE BEST ONE</button>
                <button>RESET YOUR DESTINATION</button>
            </div>
        </div>
    );
};

export default Cart;