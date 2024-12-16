import Image from 'next/image'
import Link from 'next/link'

const Socials = () => {
    return (
        <div className='flex justify-center gap-6 items-center  rounded-2xl shadow-2xl absolute top-[400px] lg:top-44 lg:left-9 lg:h-60 lg:flex lg:flex-col lg:gap-0 md:flex md:h-16 md:items-center md:gap-4 md:absolute md:top-[470px] md:left-[270px] lg:bg-gradient-to-tl lg:from-violet-500 lg:to-violet-800 border-none bg-gradient-to-tr from-violet-900 to-violet-700 p-3 move-up-down '>
            <Link href="https://facebook.com/ramrijal.william" className='size-10 rounded-lg p-1 lg:mt-3  hover:scale-125 transition ease-in-out delay-400 '>
                <Image src="/facebook-svgrepo-com.svg" alt="facebook" width={100} height={100} />
            </Link>
            <Link href="https://instagram.com/ramrijal12" className='size-10 rounded-lg p-1 lg:mt-3   hover:scale-125  transition ease-in-out delay-400 '>
                <Image src="/instagram-svgrepo-com.svg" alt="instagram" width={100} height={100} />
            </Link>
            <Link href="https://github.com/RamRijal" className='size-10 rounded-lg p-1 lg:mt-3   hover:scale-125  transition ease-in-out delay-400 '>
                <Image src="/github-142-svgrepo-com.svg" alt="github" width={100} height={100} />
            </Link>
            <Link href="https://linkedin.com/in/ramrijal12/" className='size-11 rounded-lg p-1 lg:mt-3   hover:scale-125 transition ease-in-out delay-400 '>
                <Image src="/linkedin-svgrepo-com.svg" alt="linkedin" width={100} height={100} />
            </Link>
        </div>
    )
}

export default Socials