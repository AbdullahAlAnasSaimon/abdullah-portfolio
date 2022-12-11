import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
  const detailsOfProjects = useLoaderData();
  console.log(detailsOfProjects);
  const {name, photo, details, features, live, github} = detailsOfProjects;
  return (
    <div>
      <h2>{name}</h2>
      <p>{details}</p>
      <p>Features:</p>
      {features.map((f, i) => <li key={i} className='list-disc'>{f}</li>)}
      {
        photo.map((ph, i) => <img key={i} src={ph} alt='Project'/>)
      }
    </div>
  );
};

export default ProjectDetails;