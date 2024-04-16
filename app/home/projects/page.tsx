import React from "react";

const Projects = () => {
  return (
    <div className=" relative h-screen bg-violet-950 bg-none text-white overflow-hidden">
      {/* <article className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <a
          className="w-full flex flex-col bg-[#AC58F5] rounded-2xl shadow-lg overflow-hidden group relative items-start justify-center p-8 lg:p-4 lg:aspect-video cursor-pointer"
          href="http://www.colorhub.app"
          target="_blank">
          <img
            alt="ColorHub"
            loading="lazy"
            width="1366"
            height="677"
            decoding="async"
            data-nimg="1"
            className="absolute scale-[200%] blur-sm lg:blur-none group-hover:scale-[205%] lg:translate-x-1/2 rounded-tl-2xl shadow-lg shadow-darkest/20 opacity-30 group-hover:opacity-50 lg:scale-100 lg:group-hover:scale-[103%] transition-all duration-300 ease-in-out z-0 lg:-bottom-1"
            srcSet="/_next/image?url=%2Fcolorhub.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fcolorhub.png&amp;w=3840&amp;q=75 2x"
            src="/_next/image?url=%2Fcolorhub.png&amp;w=3840&amp;q=75"
          />
          <div className="flex flex-col w-1/2">
            <h3 className="text-3xl text-white font-display font-extrabold z-10">
              ColorHub
            </h3>
            <p className="text-white z-10 font-semibold">
              Find the perfect color palette for your next project
            </p>
            <div className="project-link-icon-wrapper group-hover:text-[#AC58F5] absolute right-4 bottom-4 group-hover:rotate-[360]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-5 h-5 icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-right">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 7l10 10"></path>
                <path d="M17 8l0 9l-9 0"></path>
              </svg>
            </div>
          </div>
        </a>
        <a
          className="w-full flex flex-col bg-[#139ae1] rounded-2xl shadow-lg overflow-hidden group relative items-start justify-center p-8 lg:p-4 lg:aspect-video cursor-pointer"
          href="http://www.profileme.dev"
          target="_blank">
          <img
            alt="ProfileMe"
            loading="lazy"
            width="1366"
            height="655"
            decoding="async"
            data-nimg="1"
            className="absolute scale-[200%] blur-sm lg:blur-none group-hover:scale-[205%] lg:translate-x-1/2 rounded-tl-2xl shadow-lg shadow-darkest/20 opacity-30 group-hover:opacity-50 lg:scale-100 lg:group-hover:scale-[103%] transition-all duration-300 ease-in-out z-0 lg:-bottom-1"
            srcSet="/_next/image?url=%2Fprofileme.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fprofileme.png&amp;w=3840&amp;q=75 2x"
            src="/_next/image?url=%2Fprofileme.png&amp;w=3840&amp;q=75"
          />
          <div className="flex flex-col w-1/2">
            <h3 className="text-3xl text-white font-display font-extrabold z-10">
              ProfileMe
            </h3>
            <p className="text-white z-10 font-semibold">
              Create an amazing GitHub profile in two minutes
            </p>
            <div className="project-link-icon-wrapper group-hover:text-[#139ae1] absolute right-4 bottom-4 group-hover:rotate-[360]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-5 h-5 icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-right">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 7l10 10"></path>
                <path d="M17 8l0 9l-9 0"></path>
              </svg>
            </div>
          </div>
        </a>
        <a
          className="w-full flex flex-col bg-[#00B25A] rounded-2xl shadow-lg overflow-hidden group relative items-start justify-center p-8 lg:p-4 lg:aspect-video cursor-pointer"
          href="http://www.svghub.app"
          target="_blank">
          <img
            alt="SVGHub"
            loading="lazy"
            width="1366"
            height="655"
            decoding="async"
            data-nimg="1"
            className="absolute scale-[200%] blur-sm lg:blur-none group-hover:scale-[205%] lg:translate-x-1/2 rounded-tl-2xl shadow-lg shadow-darkest/20 opacity-30 group-hover:opacity-50 lg:scale-100 lg:group-hover:scale-[103%] transition-all duration-300 ease-in-out z-0 lg:-bottom-1"
            srcSet="/_next/image?url=%2Fsvghub.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fsvghub.png&amp;w=3840&amp;q=75 2x"
            src="/_next/image?url=%2Fsvghub.png&amp;w=3840&amp;q=75"
          />
          <div className="flex flex-col w-1/2">
            <h3 className="text-3xl text-white font-display font-extrabold z-10">
              SVGHub
            </h3>
            <p className="text-white z-10 font-semibold">
              Over 100 free SVG scribbles and squiggles
            </p>
            <div className="project-link-icon-wrapper group-hover:text-[#00B25A] absolute right-4 bottom-4 group-hover:rotate-[360]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-5 h-5 icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-right">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 7l10 10"></path>
                <path d="M17 8l0 9l-9 0"></path>
              </svg>
            </div>
          </div>
        </a>
        <a
          className="w-full flex flex-col bg-[#f5bb00] rounded-2xl shadow-lg overflow-hidden group relative items-start justify-center p-8 lg:p-4 lg:aspect-video cursor-pointer"
          href="http://www.smylo.co"
          target="_blank">
          <img
            alt="Smylo"
            loading="lazy"
            width="1366"
            height="655"
            decoding="async"
            data-nimg="1"
            className="absolute scale-[200%] blur-sm lg:blur-none group-hover:scale-[205%] lg:translate-x-1/2 rounded-tl-2xl shadow-lg shadow-darkest/20 opacity-30 group-hover:opacity-50 lg:scale-100 lg:group-hover:scale-[103%] transition-all duration-300 ease-in-out z-0 lg:-bottom-1"
            srcSet="/_next/image?url=%2Fsmylo.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fsmylo.png&amp;w=3840&amp;q=75 2x"
            src="/_next/image?url=%2Fsmylo.png&amp;w=3840&amp;q=75"
          />
          <div className="flex flex-col w-1/2">
            <h3 className="text-3xl text-white font-display font-extrabold z-10">
              Smylo
            </h3>
            <p className="text-white z-10 font-semibold">
              Never miss an important date again
            </p>
            <div className="project-link-icon-wrapper group-hover:text-[#f5bb00] absolute right-4 bottom-4 group-hover:rotate-[360]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-5 h-5 icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-right">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 7l10 10"></path>
                <path d="M17 8l0 9l-9 0"></path>
              </svg>
            </div>
          </div>
        </a>
      </article> */}
    </div>
  );
};

export default Projects;
