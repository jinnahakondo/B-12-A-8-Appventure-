import React from 'react';
import GooglePlay from '../../../assets/GooglePlay.png'
import AppStor from '../../../assets/AppStore.png'
import HeroBanner from '../../../assets/hero.png'

const Banner = () => {
    return (
        <div className='pt-20'>
            <div className='mb-10'>
                <h2 className='text-4xl md:text-7xl font-semibold text-center leading-[1.2]'>We Build <br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'> Productive</span> Apps</h2>
                <p className='text-gray-400 text-center pt-4'> At AppVenture, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex justify-center items-center mt-6 '>
                    <a href='https://play.google.com' className='btn mr-5 rounded-lg'> <img src={GooglePlay} className='w-5 h-5' /> Google Play </a>
                    <a href='https://www.apple.com' className='btn rounded-lg'> <img src={AppStor} className='w-5 h-5' /> AppStore</a>
                </div>
            </div>
            <div>
                <img src={HeroBanner} className='mx-auto' />
                <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-2xl'>
                    <h2 className='text-xl md:text-4xl text-white font-medium text-center pt-20 pb-10'>Trusted by Millions, Built for You </h2>
                    <div className='pb-20'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 items-center justify-center'>
                            <div className='flex flex-col items-center justify-center gap-4'>
                                <h6 className='text-white'>Total Downloads</h6>
                                <p className='text-xl lg:text-6xl text-white font-extrabold'>29.6M</p>
                                <h6 className='text-white'>21% more than last month</h6>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-4'>
                                <h6 className='text-white'>Total Reviews</h6>
                                <p className='text-xl lg:text-6xl text-white font-extrabold'>906K</p>
                                <h6 className='text-white'>46% more than last month</h6>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-4 md:col-span-2 lg:col-span-1'>
                                <h6 className='text-white'>Active Apps</h6>
                                <p className='text-xl lg:text-6xl text-white font-extrabold'>132+</p>
                                <h6 className='text-white'>31 more will Launch</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;