import React from 'react';
import myImg from '../../image/saimon-removebg-preview.png';
import Typewriter from 'typewriter-effect';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='flex hero-content w-11/12 mx-auto'>
      <div className='w-[25px] hidden lg:block'>
        <ul className='text-center h-[230px] w-[25px]'>
          <li><a href="https://www.facebook.com/abdullahalanassaimon/" target='_blank'><FaFacebook className='text-2xl text-blue-500 hidden lg:block text-center my-4 p-[2px] bg-white hover:bg-gray-200 duration-300 rounded-full' /></a></li>
          <li><a href="https://www.linkedin.com/in/abdullahalanassaimon/" target='_blank'><FaLinkedin className='text-2xl text-blue-700 hidden lg:block my-4 p-[2px] bg-white hover:bg-gray-200 duration-300 rounded-sm' /></a></li>
          <li><a href="https://github.com/AbdullahAlAnasSaimon/" target='_blank'><FaGithub className='text-2xl text-slate-500 hidden lg:block my-4 p-[2px] bg-white hover:bg-gray-200 duration-300 rounded-full' /></a></li>
        </ul>
        <p className='rotate-[270deg] whitespace-nowrap font-bold'>Follow Me On</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 hero-content h-full md:!h-screen'>
        <div className='text-center md:text-left my-10 md:my-0 ml-0 md:ml-7'>
          <h4 className='text-xl'>Hi, I'm</h4>
          <h1 className='text-4xl font-bold my-3'>Abdullah Al Anas Saimon</h1>

          <div className='text-2xl'>
            <Typewriter
              options={{
                strings: ['Frontend Developer', 'React js Developer', 'MERN Stack Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <a href='https://drive.google.com/file/d/1-640XGzasvFDojVoQLQPqJXKLfH_emQS/view?usp=share_link' target='_blank' rel="noreferrer" download><button className='rounded-full border-2 bg-slate-700 hover:bg-slate-100 hover:text-slate-700 hover:border-slate-700 text-white px-4 py-2 text-md duration-300 mt-5' >Download Resume</button></a>
          <div className='block md:hidden my-7'>
            <a href="https://www.facebook.com/abdullahalanassaimon/" target='_blank'><FaFacebook className='text-2xl text-blue-500 text-center inline-block' /></a>
            <a href="https://www.linkedin.com/in/abdullahalanassaimon/" target='_blank'><FaLinkedin className='text-2xl text-blue-700 mx-4 inline-block' /></a>
            <a href="https://github.com/AbdullahAlAnasSaimon/" target='_blank'><FaGithub className='text-2xl text-slate-500 inline-block' /></a>
          </div>
        </div>
        <div>
          <img src={myImg} alt="" className='mx-auto block w-96 md:w-auto border-4 dark:bg-white light:bg-slate-500 rounded-full' />
        </div>
      </div>
    </div>
  );
};

export default Home;