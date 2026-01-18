import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='bg-red-100 rounded-b-2xl p-5 mb-10'>
        <div className='container mx-auto'>
          <div className='py-16 lg:py-28'>
            <h2 className='text-center text-3xl lg:text-5xl font-bold'>
              Contact Us
            </h2>
            <p className='lg:w-1/2text-center mx-auto mt-5'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum iste soluta, architecto commodi, voluptatibus provident nulla modi labore temporibus placeat perspiciatis aspernatur veniam obcaecati iure quisquam. Itaque facilis quas totam.
            </p>
          </div>
          <div className='lg:w-1/2 mx-auto mb-28'>
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
                  <span className='block text-gray-300'>Enter your Email</span>
                  <input className='w-full p-1 bg-white rounded focus:outline-none border-b' type='text' />
                </div>
              </div>
              <div className='flex border bg-white p-2 rounded focus-within:border-purple-300 mt-3'>
                <div className='w-auto flex px-2 text-gray-300'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" classname="size-6 my-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>



                </div>
                <div className='w-full'>
                  <span className='block text-gray-300'>Select Course</span>
                  <select
                    className='w-full p-1 focus:outline-none border-b'
                    name="" id="">
                    <option value="Design">Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="SEO">SEO</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                  </select>
                </div>
              </div>
              <div className='flex border bg-white p-2 rounded focus-within:border-purple-300 mt-3'>
                <div className='w-auto flex px-2 text-gray-300'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" classname="size-6 my-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>



                </div>
                <div className='w-full'>
                  <span className='block text-gray-300'>Enter your Message</span>
                  <textarea
                  className='w-full p-1 focus:outline-none border-b' name="" id=""></textarea>
                </div>
              </div>
              <div className='mt-5'>
                <button className='text-white bg-purple-500 rounded px-3 py-2 block mt-3 font-semibold w-full md:w-auto '>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact