import React from 'react';
import DownloadIcon from '../../../assets/icon-downloads.png'
import RateIcon from '../../../assets/icon-ratings.png'
import { toast } from 'react-toastify';
import { Link } from 'react-router';

const InstalledApp = ({ app, setAllStoredApps }) => {

    const handelUnInstallBtn = () => {
        toast.error("can not uninstall app");
    }

    return (
        <div className='flex flex-col md:flex-row justify-center items-center  md:justify-between gap-5 shadow-lg  rounded-lg p-4 border border-gray-300'>
            {/* left div  */}


            <Link to={`/apps-details/${app.id}`}>
                <div className='flex gap-6 items-center'>
                    {/* left div  */}
                    <div>
                        <img src={app.image} className='w-20 h-20 rounded-lg' />
                    </div>
                    {/* right div  */}
                    <div >
                        <h3 className='text-xl font-medium'>{app.title}</h3>
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center'>
                                <img src={DownloadIcon} className='h-3 w-3 mr-1' />
                                <p className='font-medium text-green-500'> {app.downloads}</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <div className='text-amber-500 font-medium flex items-center '>
                                    <img src={RateIcon} className='h-3 w-3 ' /> <span className='mr-1'>{app.ratingAvg}</span>
                                </div>
                                <p className='font-medium text-gray-400'> {app.size} MB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            {/* right div  */}
            <div className=''>
                <button onClick={handelUnInstallBtn} className='bg-green-500 text-white font-bold px-5 py-2 rounded-xl'> Uninstall</button>
            </div>
        </div >

    );
};

export default InstalledApp;