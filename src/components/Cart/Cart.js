import React from 'react';
import './Cart.css';

function chooseRandom() {
    Math.random();
}

const Cart = ({ cart, handleResetBtn }) => {
    // const { location, img } = cart;
    return (
        <div className='cart'>
            <div>
                <h4>Selected Destination</h4>
            </div>
            <div>
                {
                    cart.map(item => (<h4 key={item.id}>{item.location}</h4>)

                    )}
            </div>

            <div>
                <button>CHOOSE BEST ONE</button>
                <button onClick={() => handleResetBtn()}>RESET YOUR DESTINATION</button>
            </div>
        </div>
    );
};

export default Cart;