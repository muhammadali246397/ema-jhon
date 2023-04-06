import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/order">Shop</Link>
                <Link to="/order-Review">Order Review</Link>
                <Link to="/manage">Manage Inventory</Link>
                <Link to="/login">Log in</Link>
            </div>
        </nav>
    );
};

export default Header;