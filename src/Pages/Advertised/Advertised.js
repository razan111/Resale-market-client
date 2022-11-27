import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spiner from '../../components/Spiner/Spiner';

const Advertised = () => {
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['porducts'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/advertised/'
                    , {
                        headers: {
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        }
                    }
                );
                const data = await res.json()
                return data;
            }
            catch (error) {

            }
        }
    })

    if(isLoading){
        return <Spiner></Spiner>
      }


    return (
        <div className='mt-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    products &&
                    products.map(product => <div key={product._id} className="card  bg-base-100 shadow-xl">
                        <figure><img className='h-80 w-full object-cover' src={product.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {product.productName}
                                <div className="badge badge-secondary">{product.conditionType}</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                            <div className="card-actions justify-between">
                                <h2>Price: {product.price}</h2>
                                <h2>OldPrice: {product.oldPrice}</h2>
                                <h2>Location: {product.location}</h2>
                                <h2>Category: {product.productCategory}</h2>
                                <h2>Purchase: {product.purchase}</h2>
                                <h2>Number: {product.number}</h2>
                            </div>
                            <div className="card-actions justify-end">


                                <button
                                    className="badge badge-outline">Details</button>

                                <button className="badge badge-outline">Buy</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Advertised;