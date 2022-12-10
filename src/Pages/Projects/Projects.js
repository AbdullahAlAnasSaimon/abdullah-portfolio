import React from 'react';
import quizkit from '../../image/quizkit.png';
import kitoskill from '../../image/kitoskill.png';
import travelaro from '../../image/travelaro.png';
import rebooks from '../../image/rebooks.png';
import { BsGithub } from 'react-icons/bs';

const Projects = () => {

  const projects = [
    {
      name: 'QuizKit - Online Quiz application',
      photo: quizkit,
      live: 'https://quizkit.netlify.app/',
      github: 'https://github.com/AbdullahAlAnasSaimon/Quizkit'
    },
    {
      name: 'KitoSkill - Learning platform',
      photo: kitoskill,
      live: 'https://kito-skill.web.app/',
      github: 'https://github.com/AbdullahAlAnasSaimon/KitoSkill-Client'
    },
    {
      name: 'Travelaro - Personal travel agency',
      photo: travelaro,
      live: 'https://travelaro-be1ed.web.app/',
      github: 'https://github.com/AbdullahAlAnasSaimon/Travelaro-client'
    },
    {
      name: 'ReBooks - Books Resell Platform',
      photo: rebooks,
      live: 'https://rebooks-f1684.web.app/',
      github: 'https://github.com/AbdullahAlAnasSaimon/Rebooks-client'
    },
  ]

  return (
    <div className='w-full md:w-11/12 mx-auto'>
      <h2 className='text-2xl text-center font-semibold'>Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
        {projects.map(pro => <div className='h-[320px] border rounded-md'>
          <div className='h-[260px] border-b overflow-hidden'>
            <img src={pro.photo} alt="" className='hover:scale-105 duration-500 rounded-md' />
          </div>
          <div className='hero-content p-[10px] justify-start'>
            <a href={pro.live} target={'_blank'} rel='noreferrer'><button className='px-4 py-2 bg-slate-700 hover:bg-slate-600 duration-300 text-white rounded-md'>Live Site</button></a>
            <a href={pro.github} target={'_blank'} rel='noreferrer'><button className='px-4 py-2 bg-slate-700 hover:bg-slate-600 duration-300 text-white ml-2 rounded-md'><BsGithub className='inline-block text-xl'/></button></a>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default Projects;