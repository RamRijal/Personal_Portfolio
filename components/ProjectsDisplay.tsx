'use client'
import { ProjectsList } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import ProjectsListing from "./ProjectsListing";
import { TextFade } from "./UI/TextFade";

const ProjectsDisplay = () => {
    return (
        <div className="relative h-auto bg-opacity-0 bg-[#5B21B6] text-white overflow-hidden">
            <div className="text-center pt-16">
                <TextFade
                    direction="down"
                    className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
                >
                    <h1 className="projects text-sm md:text-md font-normal text-gray-300">Check out my works</h1>
                </TextFade>
                <div className="relative inline-flex ">
                    <span className="absolute inset-x-0 bottom-0 border-b-[16px] border-[#0B8DB2]"></span>
                    <div className="text-center">
                        <TextFade
                            direction="down"
                            className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
                        >
                            <h2 className="text-3xl mt-2 relative font-bold leading-tight text-gray-100 sm:text-4xl lg:text-5xl">Projects</h2>
                        </TextFade>
                    </div>
                </div>
            </div>

            <ProjectsListing />
            <div className="flex flex-col items-center pt-12 md:pt-0 mb-12">
                <Link href='/projects'>
                    <button className="px-4 py-3 text-md font-medium text-white bg-violet-700 rounded hover:bg-violet-900 focus:bg-violet-900">
                        See all projects
                    </button>
                </Link>
            </div>
        </div >
    );
};

export default ProjectsDisplay;
