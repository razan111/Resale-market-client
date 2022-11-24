import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUser = (userInfo) =>{
        setLoading(true)
        return updateProfile(user, userInfo);
    }

    const authInfo = {
        createUser,
        signin,
        user,
        logOut,
        updateUser,
        loading,
    }

    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user ovserving')
            setUser(currentUser)
            setLoading(false)
        });

        return ()=> unSubscribe();
    } ,[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;