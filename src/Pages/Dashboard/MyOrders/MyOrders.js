import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyOrders = () => {


    const { data: orders, isLoading, refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/orders/'
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

    return (
        <div>
            <h2 className="text-3xl text-center">My Orders</h2>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
        
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product Details</th>
                            <th>Pay</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            orders && orders.map((order, i) => <tr key={order._id}>
                                <td>{i+1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={order.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold"></div>
                                            <div className="text-sm opacity-50">{order.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                {order.productName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{order.price}</span>
                                </td>
                                <td><button className='btn btn-xs'>Pay</button></td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }
             
                        
    
        
                      
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyOrders;