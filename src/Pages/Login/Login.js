import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleLogIn = data => {
        console.log(data)
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
                </form>

                <p className='text-center my-2'>New to account <Link to='/signup' className='underline text-blue-600'>Create an Account</Link></p>

                <div className="divider">OR</div>

                <button className='btn btn-outline w-full'>Continue with google</button>
            </div>

        </div>
    );
};

export default Login;