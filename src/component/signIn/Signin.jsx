import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Context';

const Signin = () => {
    const {user,createNewUser} = useContext(AuthContext)
    
    const signIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if(password !== confirm){
            alert('ops! password is not match')
            return;
        }
        console.log(email,password)
        createNewUser(email,password)
        .then(result => {
            const logedUser = result.user;
            console.log(logedUser)
            form.reset()
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div>
             <form onSubmit={signIn} className='form-style'>
                <div className='form-container'>

                    <h3>Sign In</h3>

                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />

                    <label htmlFor="password">Password
                    </label>
                    <input type="password" name='password' required />
                    <label htmlFor="password"> confirm Password
                    </label>
                    <input type="password" name='confirm' required />
                    <button className='submit'>Sign In</button>
                    <div>
                        <p className='sign-link'>allready have an account ? <Link className='linked' to="/login">please login</Link> </p>
                    </div>
                    <button className='submit'>continue with google</button>
                </div>
            </form>
        </div>
    );
};

export default Signin;