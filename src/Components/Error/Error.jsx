import React from 'react';
import ErrorImage from '../../assets/error-404.png'

const Error = () => {
    return (
        <div className='flex items-center justify-center my-20'>
            <div>
                <img src={ErrorImage} />
                <div>
                    <h2 className='text-5xl font-semibold text-center my-4'>Oops, page not found!</h2>
                    <p className='text-xl text-center'>The page you are looking for is not available.</p>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <a href='/' className="btn max-md:text-xs text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-xl py-2 px-4"><span>Go Back</span></a>
                </div>
            </div>

        </div>
    );
};

export default Error;