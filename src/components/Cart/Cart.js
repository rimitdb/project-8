import React from 'react';
import './Cart.css';


const Cart = ({ cart, handleResetBtn, chooseRandom }) => {
    // const { location, img } = cart;

    return (
        <div className='cart'>
            <div>
                <h4>Selected Destination</h4>
            </div>
            <div>
                {
                    cart.map(item => (<h5 className='cart-text' key={item.id}><img className='cart-img' src={item.img} alt="" />{item.location}, {item.country}</h5>)
                    )}
            </div>
            <div>
                <button onClick={() => chooseRandom()}>SELECT BEST ONE</button><br /><br />
                <button onClick={() => handleResetBtn()}>RESET YOUR DESTINATION</button>
            </div>
        </div>
    );
};

export default Cart;