import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth, AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hocks/useToken';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {createUser, updateUser, googleLogIn } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('')

    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()
    
    const location = useLocation();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    if(token){
        navigate('/')
    }


   
    const handleSignup = (data) => {
        
        setSignUpError('')
        console.error(errors)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('Account create Successfully')
                const userInfo = {
                    displayName: data.name,
                    allUser: data.allUser,
                    
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.allUsers)
                    })
                    .catch(err => console.error(err))

            })
            .catch(err => {
                setSignUpError(err.message)
                console.error(err)
            })
    }


    
    const googleProvider = new GoogleAuthProvider()

    // const [signInWithGoogle, guser, loading, error] = useSignInWithGoogle(auth);
    // console.log('guser', guser)
 

    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                saveUser(user.displayName, user.email)
                
            })
            .catch(error => console.error(error))
    }

    const saveUser = (name, email, allUsers = "Buyer") => {
        const user = { name, email , allUsers }
        fetch('https://resale-portal-server.vercel.app/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
            })
    }


    return (
        <div className='h-[800px] flex justify-center items-center '>

            <div className='border-2 p-7 rounded-xl shadow-lg w-96'>
                <h2 className='text-2xl text-center'>Signup</h2>

                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>

                        <input type='text'
                            {...register("name", { required: 'Email is requred' })}
                            className="input input-bordered w-full max-w-xs" />

                        {errors.email && <p role='alert' className='text-red-500'>{errors.name.message}</p>}

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>

                        <input type='email'
                            {...register("email", { required: 'Email is requred' })}
                            className="input input-bordered w-full max-w-xs" />

                        {errors.email && <p role='alert' className='text-red-500'>{errors.email.message}</p>}

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>

                        <input type='password'
                            {...register("password", {
                                required: 'password is requred',
                                minLength: { value: 8, message: 'Password mustbe 8 char' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$%])(?=.*[0-9])/, message: 'Password must be Strong' }
                            })}
                            className="input input-bordered w-full max-w-xs" />

                        {errors.password && <p role='alert' className='text-red-500'>{errors.password.message}</p>}

                    </div>

                    {/* select  */}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">AllUsers</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs"
                        {...register("allUsers", { required: "allUsers is requred" })}
                        >
                            <option>Buyer</option>
                            <option>Seller</option>
                        </select>
                        {errors.allUsers && <p role='alert' className='text-red-500'>{errors.allUsers.message}</p>}
                    </div>

                    


                    <input className='btn btn-accent w-full mt-5' value='Signup' type="submit" />

                </form>

                <p className='text-center my-2'>Already have an account <Link to='/login' className='underline text-blue-600'>Login</Link></p>

                <div className="divider">OR</div>

                <button onClick={handleGoogleSignIn}  className='btn btn-outline w-full'>Continue with google</button>
            </div>

        </div>
    );
};

export default Signup;