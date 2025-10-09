import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DownloadIcon from '../../../../assets/icon-downloads.png'
import StarIcon from '../../../../assets/icon-ratings.png'
import ReviewIcon from '../../../../assets/icon-review.png'
import Chart from '../../../Chart/Chart';

const AppDetails = () => {
    const [appData, setAppData] = useState([])
    const { id } = useParams();
    const appId = parseInt(id)
    const allAppsData = useLoaderData();
    const { title, companyName, image, downloads, ratingAvg, reviews, size, ratings } = appData;
    useEffect(() => {
        const filteredApp = allAppsData.find(app => app.id === appId);
        setAppData(filteredApp)

    }, [appId, allAppsData])

    return (
        <div>
            <div className='flex flex-col lg:flex-row gap-10 my-20'>
                <div className=' bg-gray-300 rounded-2xl'><img src={image} className=' p-5' /></div>
                <div className='w-full'>
                    <h2 className='text-4xl font-bold '>{title}</h2>
                    <p ><span className='text-xl text-gray-400  mt-2 mr-2'> Developed by:</span> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'> {companyName}</span></p>
                    <div className='bg-gray-300 h-0.5 w-full my-9'></div>
                    <div className='flex flex-col lg:flex-row gap-12'>
                        <div className='flex flex-col items-center gap-3'>
                            <img src={DownloadIcon} />
                            <h3 className='text-xl'>Downloads</h3>
                            <p className='font-extrabold text-4xl'>{downloads}</p>
                        </div>
                        <div className='flex flex-col items-center gap-3'>
                            <img src={StarIcon} />
                            <h3 className='text-xl'>Average Rating</h3>
                            <p className='font-extrabold text-4xl'>{ratingAvg}</p>
                        </div>
                        <div className='flex flex-col items-center gap-3'>
                            <img src={ReviewIcon} />
                            <h3 className='text-xl'>Average Rating</h3>
                            <p className='font-extrabold text-4xl'>{reviews}</p>
                        </div>

                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <button className='btn text-white font-semibold bg-green-500 mt-8 rounded-lg text-xl  px-4 py-6'> Install Now ({size} MB)</button>
                    </div>
                </div>

            </div>
            <div className='bg-gray-300 h-0.5 w-full my-10'></div>
            <div className=''>
                <Chart ratings={ratings} />
            </div>
        </div>
    );
};

export default AppDetails;