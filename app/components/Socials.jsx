import React from 'react'

const Socials = () => {
    return (
        <div className='hidden items-center absolute bg-gradient-to-r from-violet-800 to-violet-700 border-none rounded-2xl shadow-2xl top-44 right-9 h-60 md:flex md:flex-col p-3 move-up-down '>
            <a href="https://facebook.com/ramrijal.william" className='size-10 rounded-lg p-1 mt-3  hover:scale-125'><img src="/facebook-svgrepo-com.svg" alt="facebook" /></a>
            <a href="https://instagram.com/ramrijal12" className='size-10 rounded-lg p-1 mt-3   hover:scale-125'><img src="/instagram-svgrepo-com.svg" alt="instagram" /></a>
            <a href="https://github.com/RamRijal" className='size-10 rounded-lg p-1 mt-3   hover:scale-125'><img src="/github-142-svgrepo-com.svg" alt="github" /></a>
            <a href="https://linkedin.com/in/ramrijal12/" className='size-11 rounded-lg p-1 mt-3   hover:scale-125'><img src="/linkedin-svgrepo-com.svg" alt="linkedin" /></a>
        </div>
    )
}

export default Socials