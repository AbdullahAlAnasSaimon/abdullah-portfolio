import React from 'react';
import { Link } from 'react-router-dom';
import myImg from '../../image/saimon-removebg-preview.png';

const Home = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto hero-content'>
      <div className='text-center md:text-left my-10 md:my-0'>
        <h4 className='text-xl'>Hi, I'm</h4>
        <h1 className='text-4xl font-bold my-3'>Abdullah Al Anas Saimon</h1>
        <h3 className='text-2xl'>Frontend Developer</h3>
        <a href='https://drive.google.com/file/d/1-640XGzasvFDojVoQLQPqJXKLfH_emQS/view?usp=share_link' target='_blank' rel="noreferrer" download><button className='rounded-full bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 text-md duration-300 mt-5' >Download Resume</button></a>
      </div>
      <div className='relative'>
        <img src={myImg} alt="" className='mx-auto block w-96 md:w-auto border-2 bg-white rounded-full'/>
      </div>
    </div>
  );
};

export default Home;