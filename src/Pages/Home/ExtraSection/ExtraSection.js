import React from 'react';
import img1 from '../../../assets/img-7.png'
import img2 from '../../../assets/img-8.png'

const ExtraSection = () => {
    return (
        <div className='grid md:grid-cols-1 lg:grid-cols-2 my-12'>
            <div className=" grid lg:grid-cols-2 md:gird-cols-1  bg-base-100 shadow-xl">
                <figure className='flex align-middle justify-center'><img src={img1} alt="Shoes" /></figure>
                <div className="card-body flex flex-col align-middle">
                <h2 className="card-title">Start making money!</h2>
                    <p>Do you have something to sell?
                        Post your first ad and start making money!</p>

                </div>
            </div>


            <div className=" grid lg:grid-cols-2 md:gird-cols-1 bg-base-100 shadow-xl">
            <figure className='flex align-middle justify-center'><img src={img2} alt="Shoes" /></figure>
                <div className="card-body flex flex-col align-middle">
                    <h2 className="card-title">Get items delivered to you with</h2>
                    <p>Choose from over 4,500 items that can be delivered to your doorstep. Order online and enjoy our Buyer Protection program, which means that we’ll replace the item for FREE if it’s not as described in the ad!</p>

                </div>
            </div>
        </div>
    );
};

export default ExtraSection;