import React from 'react';
import about from '../../image/abdullah-banner.jpg';

const About = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
        <div className='border-4'>
          <img src={about} alt="" className='h-full w-auto rounded-2xl p-2' />
        </div>
        <div className='hero-content'>
          <div>
            <h1 className='text-4xl font-bold mb-10'>Abdulla Al Anas Saimon</h1>
            <p className='mb-5'>A passionate Front End Web Developer who has the ability to work both independently and collaboratively in a fast-paced, multi-tasking environment, as well as a strong desire to learn new technologies. Make every effort to write code that is clean, concise, and efficient. Code that reflects a good user experience and makes lives better. I am looking forward to implementing my current skills and knowledge in a friendly environment with a team of great software engineers and further enriching my knowledge in the field of software engineering.</p>
            <p className='mb-5'>Over the past years, I have gained hands-on experience building several highly responsive web applications using JavaScript, React, Node.js, Express, MongoDB, Firebase, Bootstrap, TailwindCSS, etc. I am familiar with Material UI, Axios, React Query, React hook form etc.</p>
            <a href='https://form.jotform.com/223431171543043' className=" rounded-full border-2 border-slate-700 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 text-md duration-300">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;