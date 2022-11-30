import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const WishlistModal = ({products, setCurrentWishlist}) => {

    const {user} = useContext(AuthContext)

    console.log(products)

    const handleOrders  = (event) =>{
        event.preventDefault()
        const form = event.target;
        const productName = form.productName.value;
        const price = form.price.value;
        const oldPrice = form.oldPrice.value;
        const location = form.location.value;
        const email = form.email.value;
        const image = form.image.text;
        console.log('image :',image)

        const wishlistProducts = {
            image,
            productName,
            price,
            oldPrice,
            location,
            email
        }

        fetch('https://resale-portal-server.vercel.app/wishlist', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishlistProducts)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                setCurrentWishlist(null)
            toast.success('Wishlist Confiremd')
            }
        })

       

    }
    
    
    return (
        <>
        {/* The button to open modal */}
        

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="wishlistModal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="wishlistModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                

                <form onSubmit={handleOrders}  className='grid grid-cols-1 gap-3'>
                <figure className='mb-4'>
                    <img name='image' type='text' className='h-80 w-full object-cover rounded-lg' src={products.image} alt="" />
                </figure>
                

                <span>Model: <input name='productName' type="text" disabled defaultValue={products.productName}/></span>
                
                <span>Price: <input name='price' disabled defaultValue={products.price} type="number" /></span>
                <span>Old Price: <input name='oldPrice' disabled defaultValue={products.oldPrice} type="text" /></span>

                <span>Location: <input name='location' disabled defaultValue={products.location} type="text" /></span>
                <span>Email: <input name='email' disabled defaultValue={user.email} type="email" /></span>
                

                <input className='w-full btn btn-outline' type="submit" value="Wishlist" />

                </form>
            </div>
        </div>
    </>
    );
};

export default WishlistModal;