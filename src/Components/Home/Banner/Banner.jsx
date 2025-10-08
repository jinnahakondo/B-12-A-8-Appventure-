import React from 'react';
import GooglePlay from '../../../assets/GooglePlay.png'
import AppStor from '../../../assets/AppStore.png'

const Banner = () => {
    return (
        <div className='pt-20'>
            <div>
                <h2 className='text-4xl md:text-7xl font-semibold text-center leading-[1.2]'>We Build <br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'> Productive</span> Apps</h2>
                <p className='text-gray-400 text-center pt-4'> At AppVenture, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex justify-center items-center mt-6 '>
                    <button className='btn mr-5 rounded-lg'> <img src={GooglePlay} className='w-5 h-5' /> Google Play </button>
                    <button className='btn rounded-lg'> <img src={AppStor} className='w-5 h-5' /> AppStore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;