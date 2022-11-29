import React from 'react';
// import './Banner.css'
import './BannerItem.css'
const BannerItem = ({slide}) => {
    const {image, next, prev, id} = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-image'>
        <img src={image} alt='' className="w-[100vw] h-full" />
        </div>


        <div className="absolute flex justify-start  transform -translate-y-1/2 left-5 top-1/4">
        <h1 className='text-5xl font-bold text-white'>Welcome to resale market</h1>
        </div>

        <div className="absolute flex justify-start  transform -translate-y-1/2 left-5 top-2/4">
            
            <h1 className='md:text-5xl text-2xl font-bold text-white md:w-1/2 italic w-full'> “If You Are Not Taking Care Of Your Customer, Your Competitor Will.”</h1>
        </div>

        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
    </div>
    );
};

export default BannerItem;