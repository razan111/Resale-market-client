import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AdertisedModal = ({products}) => {
    const {user} = useContext(AuthContext)

    console.log(products)
    
    return (
        <>
            {/* The button to open modal */}
            

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="advertisedModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="advertisedModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <figure>
                        <img className='h-80 w-full object-cover rounded-lg' src={products.image} alt="" />
                    </figure>
                    <h3 className="text-lg mt-2 font-bold">{products.productName}</h3>
                    <p>Price: {products.price}</p>
                    <p>Old Price: <del>{products.oldPrice}</del> </p>
                    <p>Location: {products.location}</p>
                    <p className='mb-3'>Email: {user.email}</p>

                    <button className='btn btn-outline'>Buy Now</button>
                </div>
            </div>
        </>
    );
};

export default AdertisedModal;