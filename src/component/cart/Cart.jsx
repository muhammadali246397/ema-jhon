import React from 'react';

const Cart = ({carts}) => {
    
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
        </div>
    );
};

export default Cart;