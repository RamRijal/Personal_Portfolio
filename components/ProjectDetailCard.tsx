import { ProjectsList } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const ProjectDetailCard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 10;

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = ProjectsList.slice(indexOfFirstProject, indexOfLastProject);

    const totalPages = Math.ceil(ProjectsList.length / projectsPerPage);

    const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
        setCurrentPage(pageNumber);
    };

    return (
        <article className="flex flex-col gap-8 max-w-7xl mx-auto my-12">
            {currentProjects.map((project) => (
                <div key={project.id} className="flex flex-col md:flex-row gap-6">
                    <Link
                        href={project.redirectLink}
                        target="_blank"
                        style={{ backgroundColor: project.color }}
                        className="relative flex items-center justify-center md:w-2/5 rounded-2xl shadow-md overflow-hidden transition-transform transform hover:scale-105 group"
                    >
                        <Image
                            alt={project.title}
                            loading="lazy"
                            width={600}
                            height={300}
                            decoding="async"
                            className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform scale-100 group-hover:scale-105 rounded-tl-2xl rounded-tr-2xl"
                            src={project.imgSrc}
                        />
                        {/* OVERLAY */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-700 via-gray-900 to-black opacity-70 group-hover:opacity-0 transition-opacity duration-300 rounded-tl-2xl rounded-tr-2xl">
                            <span 
                            style={{ backgroundColor: project.color }}
                            className={`flex h-full w-full justify-center items-center font-bold text-3xl text-center `}>{project.title}</span>
                        </div>
                    </Link>
                    <div className="content flex flex-col w-full md:w-3/5 bg-white p-6 rounded-xl shadow-md gap-4">
                        <span className='text-3xl font-semibold text-violet-700'>{project.title}</span>
                        <p className='mt-2 font-semibold text-gray-400'>Description: &nbsp;<span className='font-medium text-black'>{project.description}</span></p>
                        <p className='mt-2 font-semibold text-gray-400'>Tech stack: &nbsp;
                            {project.stack.map((stacks) => (
                                <button key={stacks} className='font-medium text-sm mr-2 bg-[#9e7fbe] py-2 px-3 rounded-xl text-white'>
                                    {stacks}
                                </button>
                            ))}
                        </p>
                        <p className='mt-2 font-semibold text-gray-400'>Link: &nbsp;
                            <a href={project.redirectLink} target="_blank" className='font-medium text-purple-800 hover:underline'>
                                {project.redirectLink}
                            </a>
                        </p>
                    </div>
                </div>
            ))}

            {/* Pagination Controls */}
            <div className="flex justify-center mt-8">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 mx-1 text-gray-700 bg-white border rounded-md hover:bg-gray-100 disabled:opacity-50"
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 mx-1 text-white bg-purple-600 border rounded-md hover:bg-purple-700 ${currentPage === index + 1 ? 'bg-purple-800' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 mx-1 text-gray-700 bg-white border rounded-md hover:bg-gray-100 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </article>
    )
}

export default ProjectDetailCard
