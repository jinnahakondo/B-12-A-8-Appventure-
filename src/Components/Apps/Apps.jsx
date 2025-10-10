import React, { useEffect, useState } from 'react';
import AllApps from './AllApps';
import App from './App';
import AppError from '../Error/AppError';

const Apps = () => {
    const [allAppsData, setAllAppsData] = useState([]);
    const [filteredApps, setFilteredApps] = useState([])
    useEffect(() => {
        fetch('appsData.json').then(res => res.json()).then(data => {
            setAllAppsData(data);
            setFilteredApps(data);
        })
    }, []);

    const handelOnChange = e => {
        const value = e.target.value.toLowerCase();
        const filterApps = filteredApps.filter(app => app.title.toLowerCase().includes(value));
        setAllAppsData(filterApps)

    }
    return (
        <div>

            <div className='flex flex-col md:flex-row gap-10 justify-center md:justify-between items-center mb-6'>
                <div>
                    <h3 className='text-2xl font-bold'>({allAppsData.length}) Apps Found</h3>
                </div>
                {/* right div  */}
                <div>
                    <label className="input" >
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
                        <input type="search" required placeholder="Search" onChange={handelOnChange} />
                    </label>
                </div>
            </div>
            {
                allAppsData.length == 0 ? <AppError /> :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {allAppsData.map(app => <App key={app.id} app={app} />)}
                    </div>

            }

        </div>

    );
};

export default Apps;

