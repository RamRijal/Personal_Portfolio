'use client'
import ProjectsListing from "@/components/ProjectsListing";
import { TextFade } from "@/components/UI/TextFade";
import { ProjectsList } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="relative h-auto bg-[#5B21B6] text-white overflow-hidden">
      <div className="text-center pt-16">
        <TextFade
          direction="down"
          className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
        >
          <h1 className="projects text-sm md:text-md font-normal text-gray-300">Check out my works</h1>
        </TextFade>
        <div className="relative inline-flex ">
          <span className="absolute inset-x-0 bottom-0 border-b-[16px] border-[#0B8DB2]"></span>
          <TextFade
            direction="down"
            className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
          >
            <h1 className="projects relative pt-2 text-4xl md:text-5xl font-semibold">PROJECTS</h1>
          </TextFade>  </div>
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

export default Projects;
