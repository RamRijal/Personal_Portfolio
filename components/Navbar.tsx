'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <header className="relative flex items-center top-2 justify-evenly w-full m-auto" x-data={"expanded:false"}>
            {/* LOGO */}
            <div className="flex-shrink-0  ">
                <Link href="/" title="" className="flex">
                    <h1 className='text-2xl text-gray-300 font-black'>My <span className='text-cyan-600'>Logo</span></h1>
                </Link>
            </div>

            {/* NAVBAR */}
            <div className=" xl:w-fit backdrop-blur-3xl rounded-sm shadow-2xl px-4 border-white max-w-7xl  ">
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
                        <Link href="/home" title="" className="text-xl font-normal text-gray-100 transition-all duration-200 hover:text-violet-500 focus:text-violet-500 hover:-mt-1"> Home </Link>

                        <Link href="/profile" title="" className="text-xl font-normal text-gray-100 transition-all duration-200 hover:text-violet-500 focus:text-violet-500 hover:-mt-1"> Profile </Link>

                        <Link href="/projects" title="" className="text-xl font-normal text-gray-100 transition-all duration-200 hover:text-violet-500 focus:text-violet-500 hover:-mt-1"> Projects </Link>

                        <Link href="/contact" title="" className="text-xl font-normal text-gray-100 transition-all duration-200 hover:text-violet-500 focus:text-violet-500 hover:-mt-1"> Contact </Link>
                    </div>
                </nav>
                {/* HAMBURGER */}
                <nav className={`lg:hidden bg-violet-500 ${expanded ? 'block' : 'hidden'}`}>
                    <div className="flow-root">
                        <div className="flex flex-col px-6 -my-2 space-y-1">
                            <Link href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </Link>

                            <Link href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Profile </Link>

                            <Link href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Projects </Link>

                            <Link href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contact </Link>
                        </div>
                    </div>

                    <div className="px-6 mt-6">
                        <Link href="#" title="" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700" role="button">Download CV</Link>
                    </div>
                </nav>
            </div>
            {/* RESUME CV  BUTTON */}
            <div className={`lg:flex hidden`}>
                <Link href="#" title="" className="items-center justify-center hidden px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-bl from-cyan-600 to-violet-800 shadow-xl border-white rounded-md lg:inline-flex hover:bg-violet-900 hover:scale-105 focus:scale-100   focus:bg-violet-700" role="button">Download CV </Link>
            </div>
        </header>

    )
}

export default Navbar