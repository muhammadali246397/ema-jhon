import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
  const {id, name, img, ratings, price,seller} = props.product
    return (
        <div className='product'>
          <img src={img?img:"not avilable pic"} alt="" />
          <div className="details">
                <h4 className='names'>{name}</h4>
                <h5 className='prices'>Price: ${price}</h5>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} stars</p>
            </div>
            <div >
                <button onClick={props.addToCart} className='addbtn'>Add to cart {<FontAwesomeIcon icon={faShoppingCart} />}</button>
            </div>
        </div>
 
    );
};

export default Product;