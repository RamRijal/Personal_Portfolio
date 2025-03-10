import { About } from "@/data/data";
import Profile from "@/public/profile.jpg";
import Image from "next/image";
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

