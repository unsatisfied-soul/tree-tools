import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    
    return (
        <div className="main-banner py-36">
            <div className="banner-desc py-10 text-left px-8 ml-24">
                <h5 className="text-4xl font-semibold">A Dream Garden</h5>
                <h3 className="text-5xl leading-tight mb-2">Make Your Gardening Easier</h3>
                <p className="text-2xl leading-4 px-2 text-gray-600 mb-4">with our best gardening tools . it helps you proper gardening experience</p>
                <Link className="ml-2 bg-green-600 px-3 py-2 text-xl font-semibold text-white font-sans" to="/catalog">
                    <button className="">Buy Tools</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;