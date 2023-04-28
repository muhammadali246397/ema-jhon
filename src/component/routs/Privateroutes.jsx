import React, { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { Navigate } from 'react-router-dom';

const Privateroutes = ({children}) => {
    const {users,loading} = useContext(AuthContext)
    if(loading){
        return <div>Loading.......</div>
    }
    if(users){
        return children;
    }
    return <Navigate to='/login'></Navigate>
    
};

export default Privateroutes;