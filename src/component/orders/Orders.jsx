import React from 'react';
import Cart from '../cart/Cart';
import { useLoaderData,Link } from 'react-router-dom';
import OrderCart from './OrderCart';
import { deleteShoppingCart, getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCoffee, faDeleteLeft, faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const cartProducts = useLoaderData()
    const [cart, setCart] = useState(cartProducts);
    const handleDeleteCart = (id) => {
       const anothernew = cart.filter(cart => cart.id !== id)
        setCart(anothernew)
        removeFromDb(id)   
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }
    return (
       <div className='shop-container'>
        <div className=''>
        {
            cart.map(pd => <OrderCart
                handleDeleteCart={handleDeleteCart}
            key = {pd.id}
            pd={pd}
            
            ></OrderCart>)
        }
        </div>
        <div className='cart-container'>
            <Cart 
            clearCart={clearCart}
            carts ={cart}
            >
                <Link className='links' to='/cheakout'>
           <button className="review">
                <span>Proceed Checkout</span>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
           </Link>
            </Cart>
        </div>
       </div> 
       
    );
};

export default Orders;