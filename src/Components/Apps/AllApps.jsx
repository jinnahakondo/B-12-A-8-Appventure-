import React, { Suspense } from 'react';
import Apps from './Apps';
import { BarLoader } from 'react-spinners';


const AllApps = () => {
    const appsPromise = fetch('/appsData.json')
        .then(res => res.json())
    return (
        <div className='my-20'>
            <div className='mb-10'>
                <h2 className='text-2xl md:text-5xl font-black text-center mb-4'>Our All Applications</h2>
                <p className='text-center  md:text-xl text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
          
            {/* all apps  */}
            <div className='mt-5'>
                <Suspense fallback={<div className="flex justify-center items-center py-4"> <BarLoader /> </div>}>
                    <Apps appsPromise={appsPromise} />
                </Suspense>
            </div>
        </div>
    );
};

export default AllApps;