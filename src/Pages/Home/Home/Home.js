import React from 'react';
import Advertised from '../../Advertised/Advertised';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-3xl text-center">Advertised Section</h2>
            <Advertised></Advertised>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;