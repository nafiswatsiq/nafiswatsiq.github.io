'use client';

import { CardProjects } from "./CardProjects";

export default function Projects() {
  return (
    <section id='projects' className=" relative px-20 pt-36">
      <div className='grid grid-cols-4 w-full'>
        <span>04/</span>
        <span>PROJECTS</span>
        <div>
        </div>
        <span className='text-right'>/05</span>
      </div>

      <div className="mt-10">
        <p className='text-3xl md:text-5xl text-start font-bold mt-6'>
          Some of My Projects
        </p>
        <p className='text-xl text-gray-500 mt-4'>
          Here are a few projects I've worked on recently.
        </p>
      </div>
      <div className="">
        <CardProjects />
      </div>
    </section>
  );
}