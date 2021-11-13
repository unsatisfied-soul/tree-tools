import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user} = useAuth()
    return (
        <div className="main-header">
            <div className="top-header w-10/12 mx-auto py-7 flex justify-between">
                <div className="logo">
                    <h2 className="text-left text-5xl font-bold text-black">Roof<span className="text-green-500">Garden</span></h2>
                </div>
                <div className="user mt-3">
                    {
                        user.email ?
                        <Link className="bg-green-500 text-2xl px-6 py-2 text-white font-bold" to="/dashboard">Dashboard</Link>  
                        :
                        <Link to="/login">
                        <button className="bg-green-500 text-2xl px-6 py-2 text-white font-bold">LogIn</button>
                    </Link>
                    }
                    
                </div>
            </div>
            <div className="top-menu bg-green-400 py-5">
                <ul className=''>
                    <li className="px-1">
                        <Link className="text-white text-2xl px-2 py-1 font-semibold" to="/home">Home</Link>
                    </li>

                    <li className="px-1">
                        <Link className="text-white text-2xl px-2 py-1 font-semibold" to="/catalog">Catalog</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;