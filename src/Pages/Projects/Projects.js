import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Projects = () => {

  const projects = useLoaderData();

  return (
    <div className='w-full md:w-11/12 mx-auto'>
      <h2 className='text-2xl text-center font-semibold'>Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>

        {projects.map(pro => <div key={pro.id} className='h-[320px] outline outline-1 outline-gray-200 rounded-md'>
          <div className='h-[260px] outline-b overflow-hidden relative'>
            <img src={pro.photo} alt="" className='h-full w-full rounded-t-md border-b hover:scale-105 duration-500' />
          </div>
          <div className='flex justify-between p-[10px] bg-white rounded-b-md'>
            <div>
              <Link to={`/project-details/${pro.id}`}><button className='px-4 py-2 bg-slate-700 hover:bg-slate-600 duration-300 text-white rounded-md'>View Details</button></Link>
              <a href={pro.github} target={'_blank'} rel='noreferrer'><button className='px-3 py-2 bg-slate-700 hover:bg-slate-600 duration-300 text-white ml-2 rounded-md'><BsGithub className='inline-block text-xl' /></button></a>
            </div>
            <div className='tooltip tooltip-left' data-tip='Live Site'>
              <a href={pro.live} target={'_blank'} rel='noreferrer'><FaEye className='text-4xl bg-slate-700 hover:bg-slate-900 duration-300 text-white p-2 rounded-full' /></a>
            </div>
          </div>
        </div>)}

      </div>
    </div>
  );
};

export default Projects;