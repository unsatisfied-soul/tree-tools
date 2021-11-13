import axios from 'axios';
import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import GardenProducts from '../Pages/Catalog/Allproduct/GardenProducts';
import HomeProduct from '../Pages/Home/HomeProducts/HomeProduct';

export const ProductContext = createContext('product')


const Products = ({children}) => {
    const [gardenProduct,setgardenProduct]=useState([])
    useEffect(()=> {
        axios.get('https://tranquil-coast-20293.herokuapp.com/gardenProducts')
        .then(res => setgardenProduct(res.data))
    },[])
    return (
        <ProductContext.Provider value={gardenProduct}>
            {/* <HomeProduct></HomeProduct>
            <GardenProducts></GardenProducts> */}
            {children}
        </ProductContext.Provider>
    );
};

export default Products;