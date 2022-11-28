import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRPIE_PK)

console.log('stripe key', stripePromise)
const Payment = () => {
    const order = useLoaderData();
    const {productName, price} = order;
    // console.log('orders data', order)
    return (
        <div>
            <h2 className='text-3xl'>Payment for {productName}</h2>
            <p>Please Pay: {price}</p>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    order={order}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;