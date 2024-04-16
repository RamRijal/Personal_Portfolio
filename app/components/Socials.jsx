import React from 'react'

const Socials = () => {
    return (
        <div className='hidden  items-center absolute bg-gradient-to-r from-violet-800 to-violet-700 lg:bg-gradient-to-tl lg:from-violet-500 lg:to-violet-800 border-none rounded-2xl shadow-2xl lg:top-44 lg:left-9 lg:h-60 lg:flex lg:flex-col lg:gap-0 md:flex md:h-16 md:items-center md:gap-4 md:absolute md:top-[470px] md:left-[270px] md:bg-gradient-to-tr md:from-violet-900 md:to-violet-700 p-3 move-up-down '>
            <a href="https://facebook.com/ramrijal.william" className='size-10 rounded-lg p-1 lg:mt-3  hover:scale-125 transition ease-in-out delay-400 '><img src="/facebook-svgrepo-com.svg" alt="facebook" /></a>
            <a href="https://instagram.com/ramrijal12" className='size-10 rounded-lg p-1 lg:mt-3   hover:scale-125  transition ease-in-out delay-400 '><img src="/instagram-svgrepo-com.svg" alt="instagram" /></a>
            <a href="https://github.com/RamRijal" className='size-10 rounded-lg p-1 lg:mt-3   hover:scale-125  transition ease-in-out delay-400 '><img src="/github-142-svgrepo-com.svg" alt="github" /></a>
            <a href="https://linkedin.com/in/ramrijal12/" className='size-11 rounded-lg p-1 lg:mt-3   hover:scale-125 transition ease-in-out delay-400 '><img src="/linkedin-svgrepo-com.svg" alt="linkedin" /></a>
        </div>
    )
}

export default Socials