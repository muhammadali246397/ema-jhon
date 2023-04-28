import React, { useContext } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Context';

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const navigate = useNavigate();
    const login = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email,password)
        .then(result => {
            console.log(result.user)
            form.reset()
            navigate('/')
        }).catch(error => console.log(error.message))
    }
    return (
        <div>
            <form onSubmit={login} className='form-style'>
                <div className='form-container'>

                    <h3>Login</h3>

                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />

                    <label htmlFor="password">Password
                    </label>
                    <input type="password" name='password' required />
                    <button className='submit'>Login</button>
                    <div>
                        <p className='sign-link'>New to ema-Jhon ? <Link className='linked' to="/signin">Create new account</Link> </p>
                    </div>
                    <button className='submit'>continue with google</button>
                </div>
            </form>
        </div>
    );
};

export default Login;