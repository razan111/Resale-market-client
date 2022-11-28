import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const DisplayError = () => {

    const error = useRouteError();

    const {logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(err => console.error(err))
    }
    return (
        <div>
            <p className="text-red-500">Something Wrong</p>
            <p>{error.statusText || error.message}</p>
            <h2 className="text-3xl">Please <button onClick={handleLogOut}>Logout</button></h2>
        </div>
    );
};

export default DisplayError;