import React from 'react';
import Advertised from '../../Advertised/Advertised';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-3xl text-center">Advertised Section</h2>
            <Advertised></Advertised>
        </div>
    );
};

export default Home;