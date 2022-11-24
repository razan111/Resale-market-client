import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate()
    const location = useLocation()

    const from = location?.state?.from?.pathname || '/'

    const {signin} = useContext(AuthContext)

    const [logInErr, setLogInErr] = useState('')

    const handleLogIn = data => {
        console.log(data)
        setLogInErr('')
        signin(data.email, data.password)
        .then(result => {
            const user = result.user
            console.log(user)
            navigate(from, {replace: true})
            toast.success('Log in successfully')
        })
        .catch(err => {
            console.error(err)
            setLogInErr(err.message)
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center '>

            <div className='border-2 p-7 rounded-xl shadow-lg w-96'>
                <h2 className='text-2xl text-center'>Login</h2>

                <form onSubmit={handleSubmit(handleLogIn)}>
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
                            {...register("password", { required: 'password is requred', 
                            minLength: {value: 8, message: 'Password mustbe 8 char'}
                         })}
                            className="input input-bordered w-full max-w-xs" />

                        {errors.password && <p role='alert' className='text-red-500'>{errors.password.message}</p>}

                    </div>


                    <input className='btn btn-accent w-full mt-5' value='Login' type="submit" />

                    <div>
                        {
                            logInErr && <p className='text-red-600 text-center font-bold'>{logInErr}</p>
                        }
                    </div>
                </form>

                <p className='text-center my-2'>New to account <Link to='/signup' className='underline text-blue-600'>Create an Account</Link></p>

                <div className="divider">OR</div>

                <button className='btn btn-outline w-full'>Continue with google</button>
            </div>

        </div>
    );
};

export default Login;