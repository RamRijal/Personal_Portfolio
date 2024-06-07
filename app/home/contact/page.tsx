"use client";
import React, { FormEvent, useState } from "react";
import { z } from "zod";
// for pushing

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const Regex = new RegExp(/^98\d{8}$/);

      const mySchema = z.object({
        fullName: z.string().min(3),
        email: z.coerce.string().email().min(5).includes("@"),
        phoneNumber: z.string().regex(Regex, "Invalid Number!"),
        message: z.string().min(2),
      });

      const response = mySchema.safeParse({
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
      });

      if (!response.success) {
        let errArr: any[] = [];
        const { errors: err } = response.error;
        for (var i = 0; i < err.length; i++) {
          errArr.push({ for: err[i].path[0], message: err[i].message });
        }
        setErrors(errArr);
        throw err;
      }
      setErrors([]);

    }
    catch (error) { }
  };

// this is for github streak
  //  // this is for github streak 2.0
  //  // this is for github streak 3.0
  //  // this is for github streak 4.0
  //  // this is for github streak 5.0
  //  // this is for github streak 6.0
  //  // this is for github streak 7.0
  //  // this is for github streak 8.0
  //  // this is for github streak 9.0




  return (
    <section className="py-12 overflow-hidden bg-violet-900 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-6xl grid-cols-1 mx-auto gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
          <div className="relative flex flex-col justify-between max-w-lg lg:py-12 lg:max-w-none">
            <div className="flex-1">
              <p className="text-sm font-semibold tracking-widest uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                  {" "}
                  Have a project in mind?{" "}
                </span>
              </p>
            </div>
            <div className="mt-6 lg:mt-auto">
              <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                Feel free to be involved with me for your projects{" "}
              </h2>
              <p className="mt-4 text-base font-normal text-gray-300 lg:max-w-xs sm:text-lg sm:mt-6">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor.
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute right-0 opacity-50 transform translate-x-10 -translate-y-1/2 top-1/2">
              <svg
                className="filter blur-3xl"
                width="619"
                height="371"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M355.661 40.206C507.908 40.206 619-61.411 619 58.454 619 178.319 219.912 371 67.665 371s0-192.681 0-312.546c0-119.865 135.749-18.248 287.996-18.248Z"
                  fill="url(#e)"
                />
                <defs>
                  <linearGradient
                    id="e"
                    x1="0"
                    y1="371"
                    x2="36.57"
                    y2="-50.529"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#D6BCFA" />{" "}
                    {/* Semi-light violet color */}
                    <stop offset="100%" stopColor="#8B5CF6" />{" "}
                    {/* Darker violet color */}
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative overflow-hidden bg-violet-950 rounded-xl">
              <div className="p-6 sm:py-8 sm:px-9 w-full">
                <p className="text-xl font-normal text-gray-400">
                  Hit me up! Lets connect with each other.          </p>

                <form noValidate onSubmit={onSubmit} method="POST" className="mt-8 space-y-4">
                  <div>
                    <label htmlFor="" className="sr-only">
                      {" "}
                      Full name{" "}
                    </label>
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        onChange={handleChange}
                        value={formData.fullName}
                        placeholder="Full name"
                        className="block w-full  px-5 py-4 text-base text-white placeholder-gray-300 bg-violet-900 rounded-md focus:border-white focus:outline-none focus:ring-1 focus:ring-violet-400"
                      />
                      <div className="mt-1 text-xs font-medium text-red-500">
                        {
                          errors.find((error) => error.for === "fullName")
                            ?.message
                        }
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="" className="sr-only">
                      {" "}
                      Email address{" "}
                    </label>
                    <div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        className="block w-full  px-5 py-4 text-base text-white placeholder-gray-300 bg-violet-900 rounded-md focus:border-white focus:outline-none focus:ring-1 focus:ring-violet-400"
                      />
                      <div className="mt-1 text-xs font-medium text-red-500">
                        {errors.find((error) => error.for === "email")?.message}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="" className="sr-only">
                      {" "}
                      Phone number{" "}
                    </label>
                    <div>
                      <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className="block w-full  px-5 py-4 text-base text-white placeholder-gray-300 bg-violet-900 rounded-md focus:border-white focus:outline-none focus:ring-1 focus:ring-violet-400"
                      />
                      <div className="mt-1 text-xs font-medium text-red-500">
                        {
                          errors.find((error) => error.for === "phoneNumber")
                            ?.message
                        }
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="" className="sr-only">
                      {" "}
                      Message{" "}
                    </label>
                    <div>
                      <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message"
                        rows={4}
                        className="block w-full  px-5 py-4 text-base text-white placeholder-gray-300 bg-violet-900 rounded-md resize-y focus:border-white focus:outline-none focus:ring-1 focus:ring-violet-400"></textarea>
                      <div className="mt-1 text-xs font-medium text-red-500">
                        {
                          errors.find((error) => error.for === "message")
                            ?.message
                        }
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative inline-flex mt-2 group">
                      <div className="absolute transition-all duration-200 "></div>
                      <button
                        type="submit"
                        className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal  text-white  border-none rounded-md focus:bg-gradient-to-r focus:from-cyan-800 focus:to-violet-900 focus:scale-100 bg-gradient-to-bl from-cyan-600 to-violet-800  hover:bg-violet-950 hover:scale-105 duration-200 "
                        role="button">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
