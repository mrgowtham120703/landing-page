import React from 'react'
import { Link } from 'react-router-dom'

const Menubar = () => {
  return (
    <div >
            <div className='bg-purple-100 rounded-t -2xl p-5'>
                <div className='container mx-auto'>
                    <div className='flex'>
                        <a className='text-3xl font-bold pr-5 border-r border-purple-300 mr-5' href='/'>Agency</a>
                        <div className='my-auto'>
                            <button className='lg:hidden'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                            </button>
                            <ul className='hidden lg:flex font-bold text-gray-600'>
                                <li className='pr-5'>
                                     <Link className='px-3 py-3 border border-purple-100 hover:border-purple-300 rounded' to='/'>Home</Link>
                                    </li>
                                <li className='pr-5'>
                                     <Link className='px-3 py-3 border border-purple-100 hover:border-purple-300 rounded' to='/team'>About</Link>
                                    </li>
                                <li className='pr-5'>
                                    <Link className='px-3 py-3 border border-purple-100 hover:border-purple-300 rounded' to='/services'>Services</Link></li>
                                <li className='pr-5'><Link className='px-3 py-3 border border-purple-100 hover:border-purple-300 rounded' to='/portfolio'>Portfolio</Link></li>
                                <li className='pr-5'><Link className='px-3 py-3 border border-purple-100 hover:border-purple-300 rounded' to='/contact'>Contact</Link></li>
                            </ul>

                        </div>
                        <a className='flex ml-auto text-medium bg-red-500 text-white 
                                      px-3 py-2 rounded font-bold' href=''>
                            <span className='pr-1 hidden lg:block'>Get a Quote</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>

                        </a>
                    </div>
                    <div className='hidden'>
                        <ul className='lg:hidden font-bold text-gray-600'>
                                <li className='mt-1'><a className='py-2'>Home</a></li>
                                <li className='mt-1'><a className='py-2'>About</a></li>
                                <li className='mt-1'><a className='py-2'>Services</a></li>
                                <li className='mt-1'><a className='py-2'>Portfolio</a></li>
                                <li className='mt-1'><a className='py-2'>Contact</a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Menubar