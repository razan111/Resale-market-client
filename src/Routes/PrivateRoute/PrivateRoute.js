import React, { children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Spiner from '../../Pages/Loading/Spiner';

const PrivateRoute = () => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Spiner></Spiner>
    }
    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;