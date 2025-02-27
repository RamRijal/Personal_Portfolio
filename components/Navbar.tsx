'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const navRef = useRef<HTMLDivElement>(null)

    const [expanded, setExpanded] = useState(false)

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/RamRijal-CV.pdf'
        link.download = 'RamRijal-CV.pdf'

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Check if the click is outside the nav menu
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setExpanded(false)
            }
        }

        // Add event listener when menu is open
        if (expanded) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        // Cleanup listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [expanded])

    // Close menu after selecting a menu item
    const handleMenuItemClick = () => {
        setExpanded(false)
    }
    return (
        <header className="navigation z-50 relative flex items-center top-2 justify-between w-full px-6 md:px-16 pt-4 pb-8">
            {/* LOGO */}
            <div className="flex-shrink-0">
                <Link href="/" className="flex">
                    <h1 className='text-2xl text-gray-300 font-black'>Ram<span className='text-cyan-600'>Rijal</span></h1>
                </Link>
            </div>

            {/* NAVBAR */}
            <div className="xl:w-fit rounded-lg  max-w-7xl">
                <nav className="flex items-center justify-between">
                    {/* HAMBURGER TOGGLE */}
                    <div className="flex lg:hidden ml-auto relative">
                        <button type='button' className='py-2' onClick={() => setExpanded(!expanded)}>
                            <span className={`${expanded ? 'hidden' : 'block'}`}>
                                <svg className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </span>
                            <span className={`${expanded ? 'block' : 'hidden'}`}>
                                <svg className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>
                        </button>

                        {/* MOBILE NAV */}
                        <nav className={`absolute  top-14 -right-2 w-72 ${expanded ? 'block bg-violet-700 text-white p-6 rounded-lg' : 'hidden'} `}>
                            <div className="space-y-4">
                                <Link href='/' onClick={handleMenuItemClick} className="block px-2 py-2 text-lg font-medium transition-all duration-200  hover:bg-[#5833a7] hover:text-white">Home</Link>
                                {['Profile', 'Projects', 'Contact'].map((item) => (
                                    <Link key={item} href={`/${item.toLowerCase()}`} onClick={handleMenuItemClick} className="block  px-2 py-2 text-lg font-medium transition-all duration-200 hover:bg-[#5833a7] hover:text-white">{item}</Link>
                                ))}
                            </div>

                            <div className="mt-6">
                                <button onClick={() => { handleDownloadCV(); handleMenuItemClick() }
                                } className="inline-flex justify-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-bl from-cyan-600 to-violet-800 shadow-xl rounded-md hover:bg-violet-900 hover:scale-105">Download CV</button>
                            </div>
                        </nav>
                    </div>

                    {/* DESKTOP NAV */}
                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10 ">
                        <Link href='/' className="block py-2 text-lg font-medium transition-all duration-200  text-white hover:text-[#8354e9]">Home</Link>
                        {['Profile', 'Projects', 'Contact'].map((item) => (
                            <Link key={item} href={`/${item.toLowerCase()}`} className="block py-2 text-lg font-medium transition-all duration-200 text-white hover:text-[#8354e9]">{item}</Link>
                        ))}
                    </div>
                </nav>
            </div >

            {/* RESUME BUTTON */}
            < div className="hidden lg:flex" >
                <button onClick={handleDownloadCV} className="px-4 py-3 text-base font-semibold text-white bg-gradient-to-bl from-cyan-600 to-violet-800 shadow-xl rounded-md hover:bg-violet-900 hover:scale-105">Download CV</button>
            </ div>
        </header >
    )
}

export default Navbar

