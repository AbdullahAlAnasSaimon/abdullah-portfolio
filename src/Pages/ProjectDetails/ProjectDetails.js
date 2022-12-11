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
        <h2>{name}</h2>
        <div>
          <a href={live}><HiOutlineExternalLink className='inline-block text-2xl'/></a>
          <a href={github}><BsGithub className='inline-block text-2xl ml-2'/></a>
        </div>
      </div>
      <p>{details}</p>
      <p>Features:</p>
      {features.map((f, i) => <li key={i} className='list-disc'>{f}</li>)}
      <div>
        <p className='mr-2 inline-block'>Technology Used:</p>
        {technology.map((t, i) => <p key={i} className='inline-block mr-2'> {t}</p>)}
      </div>
      {
        photo.map((ph, i) => <img key={i} src={ph} alt='Project' />)
      }
    </div>
  );
};

export default ProjectDetails;