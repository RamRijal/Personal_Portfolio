
const ProfileDetails = () => {
  return (
   <>
      <section className="relative py-10 rounded-xl bg-[#a88cea] sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-100 sm:text-4xl lg:text-5xl">About me</h2>
          </div>

          <div className="px-5 py-8 mt-10 lg:mt-16 lg:p-16">
            <div className="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">
              <div className="flex flex-col  items-start">
                <p className="text-6xl text-violet-300">01</p>
                <div className="py-3">
                  <h3 className="text-2xl font-semibold text-gray-100">Made for Developers</h3>
                  <p className="mt-4 text-lg font-medium text-gray-600">Amet minim mollit non deserunt ullamco Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
              </div>


              <div className="flex flex-col  items-start">
                <p className="text-6xl text-violet-300">02</p>

                <div className="py-3">
                  <h3 className="text-2xl font-semibold text-gray-100">120+ Coded Blocks</h3>
                  <p className="mt-4 text-lg font-medium text-gray-600">Amet minim mollit non deserunt ullamco Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
              </div>

              <div className="flex flex-col  items-start">
                <p className="text-6xl text-violet-300">03</p>

                <div className="py-3">
                  <h3 className="text-2xl font-semibold text-gray-100">Secured Payments</h3>
                  <p className="mt-4 text-lg font-medium text-gray-600">Amet minim mollit non deserunt ullamco Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-6xl text-violet-300">04</p>

                <div className="py-3">
                  <h3 className="text-2xl font-semibold text-gray-100">Helpful Video Tutorials</h3>
                  <p className="mt-4 text-lg font-medium text-gray-600">Amet minim mollit non deserunt ullamco Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   </>
  );
}

export default ProfileDetails