import React from 'react';
import Products, { ProductContext } from '../../../Products/Products';
import Banner from '../Banner/Banner';
import HomeProduct from '../HomeProducts/HomeProduct';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Products>
                <HomeProduct></HomeProduct>
            </Products>
            
        </>
    );
};

export default Home;