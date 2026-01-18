import React from 'react';
import h2 from '../assets/hero2.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='mb-10'>
                <div className='flex bg-purple-100 py-12 lg:py-36 p-5'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='text center lg:text-left text-3xl font-bold lg:text-7xl lg:font-semibold'>world class design for your products.</h2>
                    <p className='text-center lg:text-left mt-4 lg:mt-8 text-2xl text-gray-600'>
                        Lets bring life to your brand.
                    </p>
                    <div className='flex mt-12 justify-center lg:justify-start'>
                        <Link className='rounded mr-5 text-lg bg-purple-600 text-white px-3 py-2' to='/services'>Services</Link>
                        <Link className='rounded mr-5 text-lg bg-red-600 text-white px-3 py-2' to='/contact'>Contact Us</Link>
                    </div>
                </div>
                <div className='w-1/2 hidden lg:flex'>
                    <img src={h2} alt='' />
                </div>
            </div>
            <div className='w-full flex justify-center py-2 bg-purple-100'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                </svg>
                <span className='ml-2'>Scroll down</span>
            </div>
            </div>
            
        </>
    )
}

export default Home