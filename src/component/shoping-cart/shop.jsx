import React, { useEffect, useState } from 'react';
import { addToDb,getShoppingCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import{Link}from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCoffee, faDeleteLeft, faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import './shop.css'

const Shop = () => {
    const [cart, setCart] = useState([])

    const [shopingcart,setShopingCart] = useState([])
    const addToCart = (product) => {
        const newCart = [...shopingcart,product]
        setShopingCart(newCart)
        addToDb(product.id)
    }
    useEffect(() =>{
        let savedcart = [];
        const storedcart = getShoppingCart();
       
        for(const id in storedcart){
         const newcart =   cart.find(singleCart => singleCart.id === id)
            if(newcart){
                const quantity = storedcart[id];
                newcart.quantity = quantity
               savedcart.push(newcart)
               
            }    
        }
        setShopingCart(savedcart);
    }, [cart])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='product-container'>
            {
                cart.map(product => <Product
                product ={product}
                key = {product.id}
                addToCart = {()=> addToCart(product)}
                ></Product>)
            }

            </div>
            <div className='cart-container'>
                <Cart 
                carts ={shopingcart} >
                    <Link className='links' to='/order-Review'>
           <button className="review">
                <span>Review Order</span>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
           </Link>
                </Cart>
                

            </div>

        </div>
    );
};

export default Shop;