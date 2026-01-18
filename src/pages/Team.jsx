import React from 'react'
import t1 from '../assets/team1.jpg'
import t2 from '../assets/team2.jpg'
import t3 from '../assets/team3.jpg'
import t4 from '../assets/team4.jpg'
import t5 from '../assets/team5.jpg'
import t6 from '../assets/team6.jpg'
import i1 from '../assets/iconmonstr-facebook-1.svg'
import i2 from '../assets/iconmonstr-instagram-13.svg'
import i3 from '../assets/iconmonstr-linkedin-3.svg'
import i4 from '../assets/iconmonstr-twitter-1.svg'
import i5 from '../assets/iconmonstr-youtube-6.svg'

const Team = () => {
  return (
    <>
    <div className='rounded-2xl p-5 mb-10'>
        <div className='container mx-auto'>
            <div className='py-16 lg:py-28'>
                <h2 className='text-center text-3xl lg:text-5xl font-bold'>
                    Our Team
                </h2>
                <p className='lg:w-1/2 text-center mx-auto mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate quisquam voluptas perferendis voluptatum sapiente iste, quo corporis nostrum ab quae maxime ipsam mollitia? Ipsam voluptas dicta repellat esse dolores.
                </p>
            </div>
            <div className='mt-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                  <div className='bg-purple-50 rounded-2xl p-10 text-center'>
                    <img className='mx-auto rounded-2xl shadow-md w-52' src={t1} alt="" />
                    <h2 className='mt-3 text-xl font-bold text-purple-900'>Name</h2>
                    <p className='text-gray-400 font-semibold'>Designation</p>
                    <ul className='flex justify-center mt-4'>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i1} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i2} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i3} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i4} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i5} className='w-5 h-5' alt="loading"/></li>
                    </ul>
                  </div>
                  <div className='bg-purple-50 rounded-2xl p-10 text-center'>
                    <img className='mx-auto rounded-2xl shadow-md w-52' src={t2} alt="" />
                    <h2 className='mt-3 text-xl font-bold text-purple-900'>Name</h2>
                    <p className='text-gray-400 font-semibold'>Designation</p>
                    <ul className='flex justify-center mt-4'>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i1} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i2} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i3} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i4} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i5} className='w-5 h-5' alt="loading"/></li>
                    </ul>
                  </div>
                  <div className='bg-purple-50 rounded-2xl p-10 text-center'>
                    <img className='mx-auto rounded-2xl shadow-md w-52' src={t3} alt="" />
                    <h2 className='mt-3 text-xl font-bold text-purple-900'>Name</h2>
                    <p className='text-gray-400 font-semibold'>Designation</p>
                    <ul className='flex justify-center mt-4'>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i1} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i2} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i3} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i4} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i5} className='w-5 h-5' alt="loading"/></li>
                    </ul>
                  </div>
                  <div className='bg-purple-50 rounded-2xl p-10 text-center'>
                    <img className='mx-auto rounded-2xl shadow-md w-52' src={t4} alt="" />
                    <h2 className='mt-3 text-xl font-bold text-purple-900'>Name</h2>
                    <p className='text-gray-400 font-semibold'>Designation</p>
                    <ul className='flex justify-center mt-4'>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i1} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i2} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i3} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i4} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i5} className='w-5 h-5' alt="loading"/></li>
                    </ul>
                  </div>
                  <div className='bg-purple-50 rounded-2xl p-10 text-center'>
                    <img className='mx-auto rounded-2xl shadow-md w-52' src={t5} alt="" />
                    <h2 className='mt-3 text-xl font-bold text-purple-900'>Name</h2>
                    <p className='text-gray-400 font-semibold'>Designation</p>
                    <ul className='flex justify-center mt-4'>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i1} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i2} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i3} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i4} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i5} className='w-5 h-5' alt="loading"/></li>
                    </ul>
                  </div>
                  <div className='bg-purple-50 rounded-2xl p-10 text-center'>
                    <img className='mx-auto rounded-2xl shadow-md w-52' src={t6} alt="" />
                    <h2 className='mt-3 text-xl font-bold text-purple-900'>Name</h2>
                    <p className='text-gray-400 font-semibold'>Designation</p>
                    <ul className='flex justify-center mt-4'>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i1} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i2} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i3} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i4} className='w-5 h-5' alt="loading"/></li>
                        <li className='p-2 bg-white shadow rounded mx-1'><a href=""></a><img src={i5} className='w-5 h-5' alt="loading"/></li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Team