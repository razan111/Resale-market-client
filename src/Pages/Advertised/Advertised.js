import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Spiner from '../../components/Spiner/Spiner';
import AdertisedModal from './AdertisedModal';
import WishlistModal from './WishlistModal';

const Advertised = () => {
    const [currentProduct, seetCurrentProduct] = useState(null)
    const [currentWishlist, setCurrentWishlist] = useState(null)
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['porducts'],
        queryFn: async () => {
            try {
                const res = await fetch(' https://resale-portal-server.vercel.app/advertised/'
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

    // const [availableOrders, setAvailableOrders] = useState([])

    // const {data: orders=[]} = useQuery({
    //     queryKey: ['orders'],
    //     queryFn: async() => {
    //      const res = await fetch('http://localhost:3000/orders')
    //      const data = await res.json()
    //      return data;
    //     }
    // })



    if (isLoading) {
        return <Spiner></Spiner>
    }


    return (
        <div className='mt-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    products &&
                    products.map(product => <div key={product._id} className="card  bg-base-100 shadow-xl">
                        <figure><img className='h-80 w-full object-cover' src={product?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {product?.productName}
                                <div className="badge badge-secondary">{product?.conditionType}</div>
                            </h2>
                            <p>{product?.description}</p>

                            <div className="card-actions justify-between">
                                <h2>Price: {product?.price}</h2>
                                <h2>OldPrice: {product?.oldPrice}</h2>
                                <h2>Location: {product?.location}</h2>
                                <h2>Category: {product?.productCategory}</h2>
                                <h2>Purchase: {product?.purchase}</h2>
                                <h2>Number: {product?.number}</h2>
                            </div>
                            <div className="card-actions justify-end">


                                <label
                                    disabled={product?.availableProduct?.length === 0}
                                    htmlFor="advertisedModal" className="btn btn-outline btn-xs"
                                    onClick={() => seetCurrentProduct(product)}

                                >Orders</label>

                                <label
                                    disabled={product?.availableProduct?.length === 0}
                                    htmlFor="wishlistModal" className="btn btn-outline btn-xs"
                                    onClick={() => setCurrentWishlist(product)}

                                >Wishlist</label>


                            </div>
                        </div>
                    </div>)
                }

            </div>

            {
                currentProduct && <AdertisedModal
                    products={currentProduct}
                    seetCurrentProduct={seetCurrentProduct}
                // products={currentWishlist}
                // setCurrentWishlist={setCurrentWishlist}
                ></AdertisedModal>
            }

            {
                currentWishlist && <WishlistModal

                    products={currentWishlist}
                    setCurrentWishlist={setCurrentWishlist}
                >

                </WishlistModal>
            }
        </div>
    );
};

export default Advertised;