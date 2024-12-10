import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Stack } from '@/data/data';

const Skills = () => {
  return (
    <div className=" max-h-screen py-8 sm:py-6 lg:py-8">
      <div className="flex flex-col mx-auto pb-5 max-w-sm md:max-w-7xl bg-[#7343D9] rounded-3xl  justify-center text-center items-center mb-7">
        <div className="  my-8">
          <p className="text-4xl text-center font-semibold text-white">Tech Stack </p>
        </div>
        <div className="p-5 ">
          <Marquee pauseOnClick={true}>
            {Stack?.reverse().map(({ logo, title, description }, index) => (
              <div
                key={index}
                className="flex  px-4 py-2 flex-col md:flex-row items-center m-2 space-x-2"
              >
                <Image
                  src={`${logo}`}
                  alt={title}
                  className="w-18 h-18 rounded-full"
                  width="100"
                  height="100"
                />

              </div>
            ))}
          </Marquee>
          <Marquee direction="right" pauseOnClick={true}>
            {Stack.map((tool, index) => (
              <div
                key={index}
                className="flex bg-darkgray  px-4 py-2 flex-col md:flex-row items-center m-2 space-x-2"
              >
                <Image
                  src={tool.logo}
                  alt={tool.title}
                  className="w-18 h-18 rounded-full"
                  width="100"
                  height="100"
                />

              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
export default Skills;