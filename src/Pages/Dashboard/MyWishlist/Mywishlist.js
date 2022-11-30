import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Spiner from '../../../components/Spiner/Spiner';
import AdertisedModal from '../../Advertised/AdertisedModal';

const Mywishlist = () => {


    const [currentProduct, seetCurrentProduct] = useState(null)

    const { data: wishlists = [], isLoading, refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            try {
                const res = await fetch('https://resale-portal-server.vercel.app/wishlist/'
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
        <Spiner></Spiner>
    }



    return (
        <div>
            {wishlists.length}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    wishlists &&
                    wishlists?.map(product => <div key={product._id} className="card  bg-base-100 shadow-xl">
                        <figure><img className='h-80 w-full object-cover' src={product?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {product?.productName}
                                <div className="badge badge-secondary">{product?.conditionType}</div>
                            </h2>
                            <p>{product.description}</p>

                            <div className="card-actions justify-between">
                                <h2>Price: {product?.price}</h2>
                                <h2>OldPrice: {product?.oldPrice}</h2>
                                <h2>Location: {product?.location}</h2>
                                <h2>Category: {product?.productCategory}</h2>
                                <h2>Purchase: {product?.purchase}</h2>
                                <h2>Number: {product?.number}</h2>
                            </div>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Mywishlist;