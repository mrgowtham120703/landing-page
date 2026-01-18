import React from 'react'
import dl from '../assets/dummy_logo.png'

const Cl = () => {
  return (
    <>
    <div className='rounded-2xl p-5 m-10'>
        <div className='container mx-auto p-0 lg:px-28'>
            <div className='bg-green-500 rounded-2xl p-10'>
                <h2 className='font-bold text-3xl text-white text-center'>
                    Companies who trust on us
                </h2>
                <div className='flex flex-wrap mt-8 justify-center'>
                    <div className='p-5 w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
                        <img src={dl} alt=''className='mx-auto max-h-12'/>
                    </div>
                    <div className='p-5 w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
                        <img src={dl} alt=''className='mx-auto max-h-12'/>
                    </div>
                    <div className='p-5 w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
                        <img src={dl} alt=''className='mx-auto max-h-12'/>
                    </div>
                    <div className='p-5 w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
                        <img src={dl} alt=''className='mx-auto max-h-12'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cl