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
            <div className='flex flex-col md:flex-row gap-10 justify-center md:justify-between items-center'>
                <div>
                    <h3 className='text-2xl font-bold'>(132) Apps Found</h3>
                </div>
                {/* right div  */}
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
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