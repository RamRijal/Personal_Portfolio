import { About } from "@/data/data";
import Socials from "./Socials";
import Image from "next/image";
import Profile from "@/public/profile.jpg";
import { TextFade } from "./UI/TextFade";

const ProfileDetails = () => {
  return (
    <section className="relative py-12 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TextFade direction="down" className="inline-block">
            <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              About Me
            </h2>
            <div className="flex-shrink-0 my-6 lg:mb-0">
              <div className="rounded-full overflow-hidden shadow-lg border-8 border-purple-300">
                <Image
                  className="object-cover"
                  alt="Profile Picture"
                  src={Profile}
                  height={300}
                  width={300}
                />
              </div>
            </div>
          </TextFade>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-8">
          

          <div className= "space-y-8 lg:space-y-12">
            {About.map((data) => (
              <div key={data.id} className="flex flex-col items-start space-y-2">
                <p className="text-4xl text-purple-300 font-semibold">{data.number}</p>
                <h3 className="text-2xl font-bold">{data.title}</h3>
                <p className="text-xl font-medium text-gray-200">{data.description}</p>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default ProfileDetails;

export const About = [
  {
    id: 1,
    title: "Introduction",
    description:
      "A dedicated software developer with a strong foundation in web technologies and a passion for creating efficient and scalable solutions.",
    number: "01",
  },
  {
    id: 2,
    title: "Education",
    description:
      "Holds a Bachelor's degree in CSIT with ongoing preparation for a master’s program in a globally recognized institution.",
    number: "02",
  },
  {
    id: 3,
    title: "Skills",
    description:
      "Expertise in JavaScript, React, Next.js, TypeScript, and full-stack development using the MERN stack.",
    number: "03",
  },
  {
    id: 4,
    title: "Experience",
    description:
      "Experience includes developing dynamic web applications such as a car racing game, a furniture e-commerce platform, and an advanced dashboard system.",
    number: "04",
  },
];
