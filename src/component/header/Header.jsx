import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/order-Review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                <a href="/login">Log in</a>
            </div>
        </nav>
    );
};

export default Header;