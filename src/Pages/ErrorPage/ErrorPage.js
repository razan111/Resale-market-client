import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col h-[100vh] justify-center'>
     
            <div className='flex justify-center'>
                <p className='text-9xl font-thin'>4</p>
                <div className='w-20 h-20 border-8 border-dashed rounded-full animate-spin mt-5 border-red-600'></div>
                <p className='text-9xl font-thin'>4</p>
            </div>

            <h3 className="text-xl text-center">Page Not Found</h3>
            {/* <button>Go Home</button> */}
            <div className='text-center mt-5'>
            <button className='btn btn-outline'><Link to='/'>Go Home Page</Link></button>
            </div>
          
        </div>
    );
};

export default ErrorPage;