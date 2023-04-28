import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDeleteLeft, faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './OrderCart.css'

const OrderCart = ({ pd,handleDeleteCart }) => {
    const { id, img, name, price, quantity } = pd;
    return (
        <div className='maincon'>
            <div className='picture'>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <p className='name'>{name}</p>
                <p>Price :<span className='color'>${price}</span></p>
                <p>Quantity : <span className='color'>{quantity}</span></p>
            </div>
            <button className='icon'><FontAwesomeIcon onClick={() => handleDeleteCart(id)} icon={faTrashAlt} /></button>
            
            </div>
        
    );
};

export default OrderCart;