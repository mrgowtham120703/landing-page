import React from 'react'
import pdt from '../assets/product.png'

const Portfolio = () => {
  return (
    <>
      <div className='bg-red-100 rounded-b-2xl p-5 mb-10'>
        <div className='container mx-auto'>
          <div className='py-26 lg:py-28'>
            <h2 className='text-center text-3xl lg:text-5xl font-bold'>
              Our Portfolio
            </h2>
            <p className='lg:w-1/2 text-center mx-auto mt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae earum repellat quaerat aperiam. Dignissimos beatae nisi molestias tempore eaque enim laudantium repellendus, veniam saepe itaque quos corrupti magni facere repudiandae.</p>
          </div>
          <div className='flex flex-wrap justify-center mb-24'>
            <div className='md:w-1/2 w-full py-4 md:pt-24'>
              <div className='w-full md:w-11/12 lg:w-8/12 mx-auto'>
                <div className='bg-white rounded-3xl shadow-lg'>
                  <img className='rounded-t-3xl' src={pdt} alt='' />
                  <div className='p-5'>
                    <p>
                      <span className='px-2 bg-red-100 rounded-3xl border border-red-200 py-1'>Branding</span>
                      <span className='px-2 bg-green-300 rounded-3xl border border-green-500 py-1'>Design</span>
                    </p>
                    <h3 className='mt-4 text-lg font-bold'>Design Item 1</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:w-1/2 w-full py-4 md:py-12'>
              <div className='w-full md:w-11/12 lg:w-8/12 mx-auto'>
                <div className='bg-white rounded-3xl shadow-lg'>
                  <img className='rounded-t-3xl' src={pdt} alt='' />
                  <div className='p-5'>
                    <p>
                      <span className='px-2 bg-red-100 rounded-3xl border border-red-200 py-1'>Branding</span>
                      <span className='px-2 bg-green-300 rounded-3xl border border-green-500 py-1'>Design</span>
                    </p>
                    <h3 className='mt-4 text-lg font-bold'>Design Item 1</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:w-1/2 w-full py-4 md:pt-24'>
              <div className='w-full md:w-11/12 lg:w-8/12 mx-auto'>
                <div className='bg-white rounded-3xl shadow-lg'>
                  <img className='rounded-t-3xl' src={pdt} alt='' />
                  <div className='p-5'>
                    <p>
                      <span className='px-2 bg-red-100 rounded-3xl border border-red-200 py-1'>Branding</span>
                      <span className='px-2 bg-green-300 rounded-3xl border border-green-500 py-1'>Design</span>
                    </p>
                    <h3 className='mt-4 text-lg font-bold'>Design Item 1</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:w-1/2 w-full py-4 md:py-12'>
              <div className='w-full md:w-11/12 lg:w-8/12 mx-auto'>
                <div className='bg-white rounded-3xl shadow-lg'>
                  <img className='rounded-t-3xl' src={pdt} alt='' />
                  <div className='p-5'>
                    <p>
                      <span className='px-2 bg-red-100 rounded-3xl border border-red-200 py-1'>Branding</span>
                      <span className='px-2 bg-green-300 rounded-3xl border border-green-500 py-1'>Design</span>
                    </p>
                    <h3 className='mt-4 text-lg font-bold'>Design Item 1</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:w-1/2 w-full py-4 md:pt-24'>
              <div className='w-full md:w-11/12 lg:w-8/12 mx-auto'>
                <div className='bg-white rounded-3xl shadow-lg'>
                  <img className='rounded-t-3xl' src={pdt} alt='' />
                  <div className='p-5'>
                    <p>
                      <span className='px-2 bg-red-100 rounded-3xl border border-red-200 py-1'>Branding</span>
                      <span className='px-2 bg-green-300 rounded-3xl border border-green-500 py-1'>Design</span>
                    </p>
                    <h3 className='mt-4 text-lg font-bold'>Design Item 1</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex pb-24'>
            <a className='mx-auto bg-purple-600 text-white font-semibold text-lg px-5 py-2 rounded' href=''>Explore</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio