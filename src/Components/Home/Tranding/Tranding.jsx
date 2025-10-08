import React, { useEffect, useState } from 'react';
import { BsApp } from 'react-icons/bs';
import TrandingApp from './TrandingApp';

const Tranding = () => {
    const [trandingAppsData, setTrandingAppsData] = useState([])
    useEffect(() => {
        fetch('appsData.json')
            .then(res => res.json())
            .then(data => setTrandingAppsData(data.slice(0, 8)))
    }, [])
    // console.log(trandingAppsData)
    return (
        <div className='mt-20'>
            <h2 className='text-5xl font-bold text-center mb-3'>Trending Apps</h2>
            <p className='text-gray-400 text-center'> Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                {
                    trandingAppsData.map(app => <TrandingApp key={app.id} app={app} />)
                }
            </div>
            <div className='mt-10 mb-20 grid place-items-center'>
                <a className="btn max-md:text-xs text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg "> <span>Show All</span></a>
            </div>
        </div>
    );
};

export default Tranding;