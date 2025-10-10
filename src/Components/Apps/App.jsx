import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const App = ({ app }) => {
    const { image, title, downloads, ratingAvg, id } = app;
    return (
        <Link to={`/apps-details/${id}`} className='transform hover:-translate-y-4 transition-all duration-100'>
            <div className='shadow-lg p-5 rounded-2xl  bg-white mt-4 border border-gray-200'>
                <div className=''>
                    <img src={image} className='h-80 mx-auto' />
                </div>
                <h2 className='text-xl font-semibold mt-4'>{title}</h2>
                <div className='mt-5 flex items-center justify-between'>
                    <div> <span className='text-green-600 px-4 py-1 rounded-lg bg-green-200 font-medium'> {downloads}</span></div>
                    <div> <span className='text-red-600 px-4 py-1 rounded-lg bg-red-200 font-medium flex items-center justify-center gap-2'> <CiStar /> {ratingAvg}</span></div>
                </div>
            </div>
        </Link>
    );
};

export default App;