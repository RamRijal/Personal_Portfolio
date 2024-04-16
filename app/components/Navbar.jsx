'use client'
import React, { useState } from 'react'

const Navbar = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <header className="relative flex items-center top-2 justify-between w-[96vw] m-auto" x-data={"expanded:false"}>
            {/* LOGO */}
            <div className="flex-shrink-0  ">
                <a href="#" title="" className="flex">
                    <h1 className='text-2xl text-gray-300 font-black'>My <span className='text-violet-700'>Logo</span></h1>
                </a>
            </div>

            {/* NAVBAR */}
            <div className=" xl:w-fit  backdrop-blur-3xl rounded-sm shadow-2xl  border-white max-w-7xl  ">
                <nav className="flex  items-center justify-between h-auto top-8 lg:h-16 ">
                    <div className="flex lg:hidden">
                        <button type='button' className=' p-2 ' onClick={() => setExpanded(!expanded)}>
                            <span className={`${expanded ? 'hidden' : 'block '}`}>
                                <svg className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                            </span>
                            <span className={`${expanded ? 'block ' : 'hidden '}`}>
                                <svg className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        <a href="#" title="" className="text-xl font-normal text-gray-100 transition-all duration-200 hover:text-violet-500 focus:text-violet-500 hover:-mt-1"> Home </a>

                        <a href="#" title="" className="text-xl font-normal text-gray-100 transition-all duration-200 hover:text-violet-500 focus:text-violet-500 hover:-mt-1"> Profile </a>

                        <a href="#" title="" className="text-xl font-normal text-gray-100 transition-all duration-200 hover:text-violet-500 focus:text-violet-500 hover:-mt-1"> Projects </a>

                        <a href="#" title="" className="text-xl font-normal text-gray-100 transition-all duration-200 hover:text-violet-500 focus:text-violet-500 hover:-mt-1"> Contact </a>
                    </div>
                </nav>
                {/* HAMBURGER */}
                <nav className={`lg:hidden bg-violet-500 ${expanded ? 'block' : 'hidden'}`}>
                    <div className="flow-root">
                        <div className="flex flex-col px-6 -my-2 space-y-1">
                            <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </a>

                            <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Profile </a>

                            <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Projects </a>

                            <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contact </a>
                        </div>
                    </div>

                    <div className="px-6 mt-6">
                        <a href="#" title="" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700" role="button">Download CV</a>
                    </div>
                </nav>
            </div>
            {/* RESUME CV  BUTTON */}
            <div className={`lg:flex hidden`}>
                <a href="#" title="" className="items-center justify-center hidden px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-l to-violet-950 from-violet-900 shadow-xl border-white rounded-md lg:inline-flex hover:bg-violet-900 hover:scale-105 focus:scale-100   focus:bg-violet-700" role="button">Download CV </a>
            </div>
        </header>

    )
}

export default Navbar