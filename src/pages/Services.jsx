import React from 'react'

const Services = () => {
  return (
    <>
      <div className='bg-red-100 rounded p-5 mb-10'>
        <div className='container mx-auto'>
          <div className='py-16 lg:py-28'>
            <h2 className='text-center text-3xl lg:5xl font-bold'>Our Services</h2>
            <p className='lg:w-1/2 text-center mx-auto mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste officiis sint repellat harum praesentium cupiditate laudantium, assumenda minus ipsam nostrum, nesciunt soluta! Architecto quo ex amet autem, aut ullam at?</p>
          </div>
          <div className='flex flex-wrap pb-16 lg:pb-28 justify-center'>
            <div className='w-full lg:w-1/2 xl:w-1/3 py-5 lg:p-5'>
              <div className='bg-white p-10 rounded-2xl shadow'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-16 text-blue-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                <h3 className='text-2xl font-bold text-gray-700'>Design</h3>
                <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eveniet possimus atque, dolorum, ducimus, delectus dignissimos minus sapiente facere natus quo vitae temporibus harum doloremque impedit repellat consequatur. Omnis, blanditiis.</p>
              </div>
            </div>
            <div className='w-full lg:w-1/2 xl:w-1/3 py-5 lg:p-5'>
              <div className='bg-white p-10 rounded-2xl shadow'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-16 text-red-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>

                <h3 className='text-2xl font-bold text-gray-700'>Development</h3>
                <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eveniet possimus atque, dolorum, ducimus, delectus dignissimos minus sapiente facere natus quo vitae temporibus harum doloremque impedit repellat consequatur. Omnis, blanditiis.</p>
              </div>
            </div>
            <div className='w-full lg:w-1/2 xl:w-1/3 py-5 lg:p-5'>
              <div className='bg-white p-10 rounded-2xl shadow'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-16 text-green-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>

                <h3 className='text-2xl font-bold text-gray-700'>Digital Marketing</h3>
                <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eveniet possimus atque, dolorum, ducimus, delectus dignissimos minus sapiente facere natus quo vitae temporibus harum doloremque impedit repellat consequatur. Omnis, blanditiis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services