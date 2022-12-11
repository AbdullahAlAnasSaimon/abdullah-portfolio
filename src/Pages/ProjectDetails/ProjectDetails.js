import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
  const detailsOfProjects = useLoaderData();
  console.log(detailsOfProjects);
  const { name, photo, details, features, live, github, technology } = detailsOfProjects;
  return (
    <div className='w-11/12 mx-auto'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl md:text-4xl my-5 font-bold'>{name}</h2>
        <div className=''>
          <a href={live} target='_blank' rel='noreferrer'><HiOutlineExternalLink className='inline-block text-lg md:text-2xl' /></a>
          <a href={github} target='_blank' rel='noreferrer'><BsGithub className='inline-block text-lg md:text-2xl md:ml-5' /></a>
        </div>
      </div>
      <p className='my-5'>{details}</p>
      <div className='my-5'>
        <p className='font-semibold mb-2'>Features:</p>
        {features.map((f, i) => <li key={i} className='list-disc'>{f}</li>)}
      </div>
      <div className='my-5'>
        <p className='mr-2 inline-block font-semibold'>Technology Used:</p>
        {technology.map((t, i) => <p key={i} className='inline-block px-3 py-1 bg-gray-100 m-2 rounded-full'> {t}</p>)}
      </div>
      <div className='py-10'>
        {
          photo.map((ph, i) => <div key={i} className='relative'>
          <span className='absolute bottom-5 right-5 text-[8px] md:text-lg z-10 text-white bg-indigo-500 px-3 py-1 rounded-full'>Image No. - {i + 1}</span>
          <img src={ph} alt='Project' className='my-20 rounded-xl shadow-2xl' />
          </div>)
        }
      </div>
    </div>
  );
};

export default ProjectDetails;