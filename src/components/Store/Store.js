import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Destination from '../Destination/Destination'
import './Store.css';
const Store = () => {

    const [destinations, setDestinations] = useState([]);
    const [cart, setCart] = useState([]);
    // const [getRandom, setGetRandom] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, []);


    const handleAddToCart = (destination) => {
        const newCart = [...cart, destination];
        setCart(newCart);
    }


    const chooseRandom = (newCart) => {
        const cartForRandom = [...cart, newCart];
        console.log(cartForRandom);
        const randomItem = [Math.floor(Math.random() * cartForRandom.length)];
        const selectedItem = cartForRandom[randomItem];
        setCart([selectedItem]);
    }

    const handleResetBtn = () => {
        setCart([]);
    }

    return (
        <div className='store-container'>
            <div className='destination-container'>
                {
                    destinations.map(destination => <Destination
                        key={destination.id}
                        destination={destination}
                        handleAddToCart={handleAddToCart}
                    ></Destination>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} chooseRandom={chooseRandom} handleResetBtn={handleResetBtn}></Cart>
            </div>
        </div>
    );
};

export default Store;