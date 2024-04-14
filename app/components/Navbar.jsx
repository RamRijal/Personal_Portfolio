import React from 'react'

const Navbar = () => {
    return (
        <header className="relative z-10 flex items-center justify-between w-[96vw] m-auto ">
            {/* LOGO */}
            <div className="flex-shrink-0  ">
                <a href="#" title="" className="flex">
                    <h1 className='text-2xl text-gray-300 font-black'>Ram <span className='text-violet-700'>Rijal</span></h1>
                </a>
            </div>

            {/* NAVBAR */}
            <div className="px-3 xl:w-fit left-0 backdrop-blur-4xl rounded-sm shadow-xl mx-auto border-white max-w-7xl sm:px-6 lg:px-8 ">
                {/* NAV LINKS*/}
                <nav className="flex  items-center justify-between h-16 lg:h-16 ">
                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        <a href="#" title="" className="text-xl font-medium text-white transition-all duration-200 hover:text-violet-500 focus:text-violet-500 hover:-mt-1"> Home </a>

                        <a href="#" title="" className="text-xl font-medium text-white transition-all duration-200 hover:text-violet-500 focus:text-violet-500 hover:-mt-1"> Profile </a>

                        <a href="#" title="" className="text-xl font-medium text-white transition-all duration-200 hover:text-violet-500 focus:text-violet-500 hover:-mt-1"> Projects </a>

                        <a href="#" title="" className="text-xl font-medium text-white transition-all duration-200 hover:text-violet-500 focus:text-violet-500 hover:-mt-1"> Contact </a>
                    </div>
                </nav>
                {/* HAMBURGER */}
                <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
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
            <div className="">
                <a href="#" title="" className="items-center justify-center hidden px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r to-violet-950 from-violet-950 shadow-xlborder-white rounded-md lg:inline-flex hover:bg-blue-700 hover:scale-105 focus:scale-90   focus:bg-blue-700" role="button">Download CV </a>
            </div>
        </header>

    )
}

export default Navbar