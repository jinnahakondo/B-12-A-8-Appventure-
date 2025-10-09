import React from 'react';
import ErrorImg from '../../assets/App-Error.png'

const AppError = () => {
    return (
        <div className='flex items-center justify-center my-20'>
            <div className='flex justify-center items-center flex-col'>
                <img src={ErrorImg} />
                <div>
                    <h2 className='text-5xl font-semibold text-center my-4'>OPPS!! APP NOT FOUND</h2>
                    <p className='text-xl text-center'>The App you are requesting is not found on our system.  please try another apps</p>
                </div>
            </div>

        </div>
    );
};

export default AppError;