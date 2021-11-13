import React, { useContext } from 'react';
import { ProductContext } from '../../../Products/Products';
import Homesortproduct from '../HomesliceProduct/Homesortproduct';
import './Homeproduct.css'

const HomeProduct = () => {
    const product =useContext(ProductContext)
    console.log(product)
    return (
        <div className="product py-24">
            <h2 className="text-6xl font-bold text-green-900">Choice Your Tools</h2>
            <div className="sort-product w-10/12 mx-auto gap-10 py-16">
            {
                product.slice(0,6).map(singleproduct => <Homesortproduct
                    key = {singleproduct._id}
                    singleproduct = {singleproduct}
                ></Homesortproduct>)
            }
            </div>
            
        </div>
    );
};

export default HomeProduct;