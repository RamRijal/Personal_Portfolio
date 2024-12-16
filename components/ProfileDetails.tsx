import { About } from "@/data/data";

const ProfileDetails = () => {
  return (
    <>
      
      <section className="relative py-10 lg:rounded-xl bg-[#a88cea] sm:py-16 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-100 sm:text-4xl lg:text-5xl">About me</h2>
          </div>

          <div className="px-5 py-8 mt-4 md:mt-10 lg:mt-16 lg:p-16">
            <div className="grid grid-cols-1 gap-6 md:gap-12 lg:gap-16 sm:grid-cols-2">
              {
                About.map((data) => {
                  return (
                    <div key={data.id} className="flex flex-col  items-start">
                      <p className="text-6xl text-violet-300">{data.number}</p>
                      <div className="py-3">
                        <h3 className="text-2xl font-semibold text-gray-100">{data.title}</h3>
                        <p className="mt-4 text-sm md:text-lg font-medium text-gray-600">{data.description}</p>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default ProfileDetails