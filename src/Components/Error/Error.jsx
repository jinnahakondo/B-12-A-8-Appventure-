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
            </div>

        </div>
    );
};

export default Error;