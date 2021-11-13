import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer bg-gray-600 text-left">
            <div className="top-footer py-10 gap-5 w-10/12 mx-auto">
                <div className="subscript">
                    <h2>RoofGarden</h2>
                    <p>If you have a garden, you have everything in this world….a world of your own, to plant, nurture and grow….not only plants but your soul!</p>
                    
                </div>
                <div className="contact">
                    <h2>Contact Info</h2>
                    <ul>
                        <li>121 King Street, Melbourne Victoria 3000 Australia
                        </li>
                        <li>+61 3 8376 6284
                        </li>
                        <li>email sdafs@gmail.com
                        </li>
                    </ul>
                </div>
                <div className="time">
                    <h2>Opening Time</h2>
                    <ul>
                        <li>Monday-Friday : 10:00am</li>
                        <li>Saturday : 8:00AM</li>
                        <li>sunday : offday</li>
                    </ul>
                </div>
                
            </div>
            <div className="bottom-footer pb-2">
                <p className="text-center text-3xl">Copyright © 2021 RooftopGarden All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;