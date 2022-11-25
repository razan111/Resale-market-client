import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleSignup = () => {

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
                            <span className="label-text">Users Selection</span>
                        </label>

                        <select className="select select-bordered w-full max-w-xs"
                        {...register("allUser", { required: 'allUser is requred' })}
                        >
                            
                            <option>Seller</option>
                            <option>Buyer</option>
                        </select>
                        {errors.allUser && <p role='alert' className='text-red-500'>{errors.allUser.message}</p>}

                    </div>


                    <input className='btn btn-accent w-full mt-5' value='Signup' type="submit" />

                </form>

                <p className='text-center my-2'>Already have an account <Link to='/login' className='underline text-blue-600'>Login</Link></p>

                <div className="divider">OR</div>

                <button className='btn btn-outline w-full'>Continue with google</button>
            </div>

        </div>
    );
};

export default Signup;