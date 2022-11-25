import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyProduct = () => {

    const {data: products} = useQuery({
        queryKey: ['porducts'],
        queryFn: async () =>{
            try{
                const res = await fetch('http://localhost:5000/products'
                , {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                }
                );
                const data = await res.json()
                return data;
            }
            catch(error){

            }
        }
    })

    return (
        <div>
            <h2>My Product: {products?.length}</h2>
        </div>
    );
};

export default MyProduct;