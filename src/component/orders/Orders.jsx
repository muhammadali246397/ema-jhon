import React from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const cartProducts = useLoaderData()
    console.log(cartProducts)
    return (
       <div className='shop-container'>
        <div className='product-container'>
        <h3>this is our ordered product list</h3>
        </div>
        <div className='cart-container'>
            <Cart carts ={cartProducts}></Cart>
        </div>
       </div> 
       
    );
};

export default Orders;<h3>this is order page</h3>