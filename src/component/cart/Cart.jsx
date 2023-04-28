import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCoffee, faDeleteLeft, faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './cart.css';
import { Link, Outlet } from 'react-router-dom';
const Cart = ({carts, clearCart,children}) => {
    
    let totalPrice = 0;
    let shiping= 0; 
    let quantity= 0;
    for(const cart of carts){
        cart.quantity = cart.quantity || 1;
      quantity = quantity + cart.quantity
       totalPrice = totalPrice + cart.price *cart.quantity
       shiping= shiping + cart.shipping * cart.quantity;
    }

    const tax = (totalPrice+shiping)*7/100;
    const grandTotal = totalPrice + shiping+tax;
    

    return (
        <div>
            <h3>product sammury</h3>
            <p>Select items : {quantity}</p>
            <p>Total price : ${totalPrice} </p>
            <p>Total shipping charge : ${shiping}</p>
            <h6>Tax : ${tax}</h6>
            <h4>Grand Total : ${grandTotal}</h4>
            <button className="clear-btn" onClick={clearCart}>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        {children}
           
        </div>
    );
};

export default Cart;