import React from 'react';
import { Link } from 'react-router-dom';
import './Homesortproduct.css'

const Homesortproduct = ({singleproduct}) => {
    
    return (
        <div className="singleproduct text-left mb-10">
            <div className="singleproduct-image">
                <img src={singleproduct.img} alt="" />
            </div>
            <div className="singleproduct-desc px-2">
                <h3 className="text-2xl font-semibold">{singleproduct.title}</h3>
                <p className="text-gray-500">{singleproduct.desc}</p>
                <h4 className="text-3xl text-green-600 font-semibold mb-6">${singleproduct.price}</h4>

                <Link className="bg-green-600 text-white py-2 px-4 " to="/purchase">
                    <button className="font-semibold">Add to Cart</button>
                </Link>
            </div>
        </div>
    );
};

export default Homesortproduct;