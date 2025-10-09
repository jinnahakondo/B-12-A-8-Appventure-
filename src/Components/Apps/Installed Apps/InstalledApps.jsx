import React from 'react';
import DownloadIcon from '../../../assets/icon-downloads.png'
import RateIcon from '../../../assets/icon-ratings.png'

const InstalledApps = () => {
    return (
        <div>
            <div className='my-10'>
                <h2 className='text-2xl md:text-5xl font-black text-center mb-4'>Your Installed Apps</h2>
                <p className='text-center  md:text-xl text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex flex-col gap-7 md:flex-row justify-center md:justify-between items-center mb-6'>
                <div><h3 className='text-2xl font-bold'>(1) Apps Found</h3></div>
                <div>
                    <div className=''>
                        <select className='btn'>
                            <option disabled> Sort By</option>
                            <option > High - Low</option>
                            <option > Low - High </option>
                        </select>
                    </div>
                </div>
            </div>
            {/* apps  */}
            <div className='flex flex-col md:flex-row justify-center items-center  md:justify-between gap-5 shadow-lg'>
                {/* left div  */}
                <div className='flex gap-6 items-center'>
                    {/* left div  */}
                    <div>
                        <img src="" alt="" className='w-20 h-20 rounded-lg' />
                    </div>
                    {/* right div  */}
                    <div >
                        <h3 className='text-xl font-medium'>Forest: Focus for Productivity</h3>
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center'>
                                <img src={DownloadIcon} className='h-3 w-3 mr-1' />
                                <p className='font-medium text-green-500'> 9M</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <div className='text-amber-500 font-medium flex items-center '>
                                    <img src={RateIcon} className='h-3 w-3 ' /> <span className='mr-1'>5</span>
                                </div>
                                <p className='font-medium text-gray-400'> 258 MB</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right div  */}
                <div>
                    <button className='bg-green-500 text-white font-bold px-5 py-2 rounded-xl'> Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;