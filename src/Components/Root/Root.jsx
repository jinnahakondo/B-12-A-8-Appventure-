import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';

const Root = () => {
    return (
        <div className='h-screen'>
            <Navbar />
            <div className='w-11/12 mx-auto '>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;