import { blogPosts } from '@/data/data';
import Image from 'next/image';
import React from 'react'

const ProfileDetails = () => {
  return (
    <section className="flex relative rounded-xl justify-center items-center  bg-[#7343D9] py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-left sm:text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl font-pj">
            Experience
          </h2>
        </div>

        <div className="mt-4 sm:mt-8">
          <svg
            className="w-auto h-4 text-gray-300 sm:mx-auto"
            viewBox="0 0 172 16"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
            />
          </svg>
        </div>

        <div className="max-w-xl mx-auto mt-8 sm:mt-12">
          <div className="flow-root">
            <div className="-my-8 divide-y divide-gray-200">
              {blogPosts.map((data) => {
                return (
                  <div key={data.id} className="relative py-8 group sm:flex sm:items-center">
                    <div className="flex-shrink-0 w-32 h-32 overflow-hidden rounded-2xl">
                      <Image
                        className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125 group-hover:rotate-12"
                        src={data.imgSrc}
                        alt="image"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="mt-8 sm:mt-0 sm:ml-10">
                      <p className="text-xl font-bold text-gray-900 font-pj mb-1">
                        {data.title}
                      </p>
                      <p className="text-lg font-medium text-gray-900 font-pj">
                        {data.company}
                      </p>
                      <div className="flex">
                        <p className="mt-5 text-sm font-semibold text-gray-300 font-pj">
                          {data.dateFrom} - 
                        </p>
                        <p className="mt-5 text-sm font-semibold text-gray-300 font-pj">
                           &nbsp;{data.dateTo}</p>
                      </div>
                      <a href="#" title="">
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"></span>
                      </a>
                    </div>
                  </div>
                )
              })
              }

            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default ProfileDetails