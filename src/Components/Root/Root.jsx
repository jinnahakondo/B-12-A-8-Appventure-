import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto pl-5 pr-4'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;