import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Stack } from '@/data/data';

const Skills = () => {
  return (
    <>

      <div className="pt-6 sm:pt-6 lg:py-8 max-h-screen">
        <div className="flex flex-col mx-auto pb-5 max-w-md md:max-w-full lg:rounded-2xl justify-center text-center items-center mb-7 lg:mb-0 overflow-hidden lg:overflow-visible">
          {/* TITLE */}
          <div className="text-center mt-8 mb-12">
            <h2 className="text-3xl font-bold leading-tight text-gray-100 sm:text-4xl lg:text-5xl">Tech Stack</h2>
          </div>
          {/* SLIDING CONTAINER */}
          <div className="">
            <Marquee pauseOnClick={true}>
              {Stack?.reverse().map(({ logo, title }, index) => (

                <div
                  key={index}
                  className="flex px-4 py-2 flex-col md:flex-row items-center m-2 space-x-2"
                >
                  {/* SLIDING CONTENT */}
                  <Image
                    src={logo}
                    alt={title}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full"
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </Marquee>
            <Marquee direction="right" pauseOnClick={true}>
              {Stack.map(({ logo, title }, index) => (
                <div
                  key={index}
                  className="flex bg-darkgray px-4 py-2 flex-col md:flex-row items-center m-2 "
                >
                  {/* SLIDING CONTENT */}
                  <Image
                    src={logo}
                    alt={title}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full"
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
