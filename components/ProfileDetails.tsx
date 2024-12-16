import { About } from "@/data/data";
import Socials from "./Socials";
import Image from "next/image";
import Profile from "@/public/profile.jpg"
import { TextFade } from "./UI/TextFade";

const ProfileDetails = () => {
  return (
    <>

      <section className="relative py-10 lg:rounded-xl bg-[#5B21B6] sm:py-16 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <TextFade
              direction="down"
              className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
            >
              <h2 className="text-3xl font-bold leading-tight text-gray-100 sm:text-4xl lg:text-5xl">About me</h2>
            </TextFade> </div>

          <div className="px-5 py-8  lg:p-16">
            <div className="flex justify-center items-center mb-16 rounded-full">
              <Image
                className="object-cover rounded-full shadow-xl border-8 border-[#8e6fd6] "
                alt=""
                src={Profile}
                height={400}
                width={400} />
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-12 lg:gap-16 sm:grid-cols-3">
              {
                About.map((data) => {
                  return (
                    <div key={data.id} className="flex flex-col  items-start">
                      <p className="text-6xl text-violet-400">{data.number}</p>
                      <div className="py-3">
                        <h3 className="text-3xl font-semibold text-gray-100">{data.title}</h3>
                        <p className="mt-4 text-sm md:text-lg font-medium text-gray-300">{data.description}</p>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
        <>
        </>
      </section>

    </>
  );
}

export default ProfileDetails