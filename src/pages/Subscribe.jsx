import React from 'react'
import pt from '../assets/product.png'

const Subscribe = () => {
    return (
        <>
            <div className='bg-red-100 rounded-2xl p-5 mb-10'>
                <div className='container mx-auto sm:px-28 py-28'>
                    <div className='flex flex-wrap'>
                        <div className='w-full lg:w-1/2 lg:pr-5 py-5'>
                            <img className='ml-auto shadow-md rounded' src={pt} alt='loading' />
                        </div>
                        <div className='w-full lg:w-1/2 lg:pl-5 py-5'>
                            <div>
                                <h2 className='text-3xl md:text-5xl font-bold'>Subscribe to our Newsletter</h2>
                                <p className='my-4 text-gray-600'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, debitis magnam nisi, consectetur adipisci distinctio corporis sint dolorum perferendis voluptate quod at corrupti! Impedit perferendis nobis ab, amet soluta itaque!
                                </p>
                                <div className='mt-12'>
                                    <form action="">
                                        <div className='flex border bg-white p-2 rounded focus-within:border-purple-300'>
                                            <div className='w-auto flex px-2 text-gray-300'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 my-auto">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                                </svg>

                                            </div>
                                            <div className='w-full'>
                                                <span className='block text-gray-300'>Enter your Name</span>
                                                <input className='w-full p-1 bg-white rounded focus:outline-none border-b' type='text' />
                                            </div>
                                        </div>
                                        <div className='flex border bg-white p-2 rounded focus-within:border-purple-300 mt-3'>
                                            <div className='w-auto flex px-2 text-gray-300'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 my-auto">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                                </svg>


                                            </div>
                                            <div className='w-full'>
                                                <span className='block text-gray-300'>Enter your Name</span>
                                                <input className='w-full p-1 bg-white rounded focus:outline-none border-b' type='text' />
                                            </div>
                                        </div>
                                        <div className='mt-5'>
                                            <input
                                            className='mr-2' type="checkbox" name='' value=''/>I Agree
                                            <button className='text-white bg-purple-500 rounded px-3 py-2 block mt-3 font-semibold w-full md:w-auto '>
                                                Subscribe
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe

