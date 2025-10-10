import React, { lazy, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApps, removeFromLs } from '../../../Utiltty/Utility';
import { toast } from 'react-toastify';

const InstalledApp = lazy(() => import('./InstalledApp'))
const InstalledApps = () => {
    const allApps = useLoaderData()
    const [allStoredApps, setAllStoredApps] = useState([])
    useEffect(() => {
        const storedId = getStoredApps();
        const storedAppsId = storedId.map(id => parseInt(id));
        const StoredApps = allApps.filter(app => storedAppsId.includes(app.id))
        setAllStoredApps(StoredApps)
    }, [allApps])

    // sort high to low 
    const handelOnChange = (e) => {
        const value = e.target.value;
        if (value === 'lowToHigh') {
            setAllStoredApps([...allStoredApps].sort((a, b) => a.downloads - b.downloads))

        }
        else if (value === 'highToLow') {
            setAllStoredApps([...allStoredApps].sort((a, b) => b.downloads - a.downloads))

        }
    }

    const handelUnInstallBtn = id => {
        const filteredAps = allStoredApps.filter(app => app.id !== id)
        setAllStoredApps(filteredAps)
        const Ids = filteredAps.map(app => app.id)
        removeFromLs(Ids);
        toast.success("app uninstallation success")
    }

    return (
        <div>
            <title>AppVenture | Installations</title>
            <div className='my-10'>
                <h2 className='text-2xl md:text-5xl font-black text-center mb-4'>Your Installed Apps</h2>
                <p className='text-center  md:text-xl text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex flex-col gap-7 md:flex-row justify-center md:justify-between items-center mb-6'>
                <div><h3 className='text-2xl font-bold'>({allStoredApps.length}) Apps Found</h3></div>
                <div>
                    <div className=''>
                        <select className='btn' onChange={handelOnChange}>
                            <option disabled selected > Sort By</option>
                            <option value="highToLow" > High - Low</option>
                            <option value="lowToHigh"> Low - High </option>
                        </select>
                    </div>
                </div>
            </div>
            {/* apps  */}
            <div className='space-y-5 mb-10 '>
                {
                    allStoredApps.map(app => <InstalledApp key={app.id} app={app} handelUnInstallBtn={handelUnInstallBtn} />)
                }
            </div>
        </div>
    );
};

export default InstalledApps;