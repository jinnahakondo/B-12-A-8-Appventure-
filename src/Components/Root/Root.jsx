import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className='h-screen'>
            <ToastContainer position="top-center"
                autoClose={2000}
            />
            <Navbar />
            <div className='w-11/12 mx-auto pt-14 '>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;