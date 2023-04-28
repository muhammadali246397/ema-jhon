import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/Context';

const Header = () => {
    const {users,loading,logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/order">Shop</Link>
                <Link to="/order-Review">Order Review</Link>
                <Link to="/manage">Manage Inventory</Link>
                <Link to="/login">Log in</Link>
                <Link to="/signin">Sign In</Link>
                {
                    users ? <>
                    <span className='user'>{users.email}</span>
                    <button onClick={handleLogOut} className='btn'>Sign-out</button>
                    </>
                    : <span></span>
                }
                
            </div>
        </nav>
    );
};

export default Header;