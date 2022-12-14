import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { TiUser } from 'react-icons/ti';
import { HiFolder, HiHome } from 'react-icons/hi';
import { ThemeContext } from '../../Context/ThemeProvider';
import { FaBloggerB } from 'react-icons/fa';

const Header = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <div className='w-full md:w-11/12 mx-auto sticky top-0 z-[9999]'>
      <div className="navbar bg-base-100/0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-full w-auto">
              <li className='mb-2'><NavLink to='/' className='p-2 !rounded-full'><HiHome className='text-xl' /></NavLink></li>
              <li className='mb-2'><NavLink to='/about' className='p-2 !rounded-full'><TiUser className='text-xl' /></NavLink></li>
              <li className='mb-2'><NavLink to='/projects' className='p-2 !rounded-full'><HiFolder className='text-xl' /></NavLink></li>
              <li><NavLink to='/blog' className='p-2 !rounded-full'><FaBloggerB className='text-xl' /></NavLink></li>
            </ul>
          </div>
          <div className='hidden lg:flex'>
            <ul className="menu menu-horizontal p-1 border-dashed border-2 border-gray-50/0 bg-white/50 backdrop-blur-md hover:border-slate-500 rounded-full duration-300">
              <div className="tooltip tooltip-bottom" data-tip="Home">
                <li className='mr-3 rounded-none'><NavLink to='/' className='p-2 !rounded-full'><HiHome className='text-2xl text-slate-700' /></NavLink></li>
              </div>
              <div className="tooltip tooltip-bottom" data-tip="About Me">
                <li className='mr-3'><NavLink to='/about' className='p-2 !rounded-full'><TiUser className='text-2xl text-slate-700' /></NavLink></li>
              </div>
              <div className="tooltip tooltip-bottom" data-tip="My Projects">
                <li className='mr-3'><NavLink to='/projects' className='p-2 !rounded-full'><HiFolder className='text-2xl text-slate-700' /></NavLink></li>
              </div>
              <div className="tooltip tooltip-bottom" data-tip="Blogs">
                <li className='mr-3'><NavLink to='/blog' className='p-2 !rounded-full'><FaBloggerB className='text-2xl text-slate-700' /></NavLink></li>
              </div>
              <div className="tooltip tooltip-bottom" data-tip={theme}>
                <li><label className="swap swap-rotate !rounded-full p-2">

                  <input type="checkbox" />

                  <svg onClick={() => setTheme('dark')} className="swap-on fill-current w-6 h-6 text-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                  <svg onClick={() => setTheme('light')} className="swap-off fill-current w-6 h-6 text-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


                </label></li>
              </div>
            </ul>
          </div>
        </div>
        <div className="navbar-end transform-none">
          <a href='https://form.jotform.com/223431171543043' target={'_blank'} className="rounded-full border-2 border-slate-700 hover:bg-slate-700/0 hover:text-slate-500 bg-slate-700 text-white px-3 py-1 text-md duration-300" rel='noreferrer'>Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default Header;