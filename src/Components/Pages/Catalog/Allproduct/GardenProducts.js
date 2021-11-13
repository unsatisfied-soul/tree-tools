import React, { useContext } from 'react';
import { ProductContext } from '../../../Products/Products';
import CatalogProduct from '../CatalogProduct/CatalogProduct';


const GardenProducts = () => {
    const products =useContext(ProductContext)
    console.log(products)
    return (
        <div className="allproducts sort-product w-10/12 mx-auto gap-10 py-16">
           {
                products.map(singleAllproduct => <CatalogProduct
                    key = {singleAllproduct._id}
                    singleAllproduct = {singleAllproduct}
                ></CatalogProduct>)
            }
        </div>
    );
};

export default GardenProducts;