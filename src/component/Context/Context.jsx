import React, { useEffect } from 'react';
import { createContext,useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/__config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const Context = ({children}) => {
    const [users, setUsers] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const user = {name:"juwel,limon, sojeeb"}

   const createNewUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
   }
   const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth,email,password)
   }

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(currentUser => {
        setUsers(currentUser);
        setLoading(false)
    }))
    return () => {
        return unsubscribe();
    }
   },[])
    const logOut = () => {
        return signOut(auth)
    }
    const info = {
        user,
        createNewUser,
        loginUser,
        users,
        loading,
        logOut,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;