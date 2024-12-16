import { ProjectsList } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'

const ProjectsListing = () => {
    return (

        <div className="p-8 md:p-16 lg:px-32 lg:pt-20 pt-10 pb-0">
            <article className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {ProjectsList.map((project) => (
                    <Link
                        key={project.id}
                        href={project.redirectLink}
                        target="_blank"
                        style={{ backgroundColor: project.color }}
                        className="w-full flex flex-col rounded-2xl shadow-lg overflow-hidden group relative items-start justify-center p-8 lg:p-4 lg:aspect-video cursor-pointer"
                    >
                        <Image
                            alt={project.title}
                            loading="lazy"
                            width={1366}
                            height={677}
                            decoding="async"
                            data-nimg="1"
                            className="absolute scale-[200%] blur-sm lg:blur-none group-hover:scale-[205%] lg:translate-x-1/2 rounded-tl-2xl shadow-lg opacity-30 group-hover:opacity-50 lg:scale-100 lg:group-hover:scale-[103%] transition-all duration-300 ease-in-out z-0 lg:-bottom-1"
                            src={project.imgSrc}
                        />
                        <div className="flex flex-col w-full md:w-1/2 z-10">
                            <h3 className="text-xl md:text-2xl font-extrabold">{project.title}</h3>
                            <p className="font-semibold">{project.description.slice(0, 30)}</p>
                            <div className="project-link-icon-wrapper absolute right-4 bottom-4 group-hover:text-[#AC58F5] group-hover:rotate-[360deg]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 7l10 10" />
                                    <path d="M17 8l0 9l-9 0" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </article>
        </div>)
}

export default ProjectsListing