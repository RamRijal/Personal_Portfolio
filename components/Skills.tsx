import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Stack } from '@/data/data';
import { TextFade } from "./UI/TextFade";

const Skills = () => {
  return (
    <div className="py-8 sm:py-6 lg:py-12 max-h-screen ">
      <div className="flex flex-col mx-auto pb-5 max-w-md md:max-w-7xl  shadow-xl bg-opacity-25 bg-[#7343D9] md:rounded-2xl justify-center text-center items-center mb-7 overflow-hidden lg:overflow-visible">
        {/* TITLE */}
        <div className="my-8">
          <TextFade
            direction="down"
            className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">Tech Stack</p>
          </TextFade>
        </div>
        {/* SLIDING CONTAINER */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-10">
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
  );
};

export default Skills;
