import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TiUser } from 'react-icons/ti';
import { HiFolder, HiHome } from 'react-icons/hi';

const Header = () => {
  return (
    <div className='w-full md:w-11/12 mx-auto'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-full w-auto">
              <li className='mb-2'><NavLink to='/' className='p-2 !rounded-full'><HiHome className='text-xl' /></NavLink></li>
              <li className='mb-2'><NavLink to='/about' className='p-2 !rounded-full'><TiUser className='text-xl' /></NavLink></li>
              <li><NavLink to='/projects' className='p-2 !rounded-full'><HiFolder className='text-xl' /></NavLink></li>
            </ul>
          </div>
          <div className='hidden lg:flex'>
            <ul className="menu menu-horizontal p-1 border-dashed border-2 border-gray-50/0 hover:border-slate-200 rounded-full duration-300">
              <li className='mr-3 rounded-none'><NavLink to='/' className='p-3 !rounded-full'><HiHome className='text-2xl' /></NavLink></li>
              <li className='mr-3'><NavLink to='/about' className='p-3 !rounded-full'><TiUser className='text-2xl' /></NavLink></li>
              <li><NavLink to='/projects' className='p-3 !rounded-full'><HiFolder className='text-2xl' /></NavLink></li>
            </ul>
          </div>
        </div>
        <div className="navbar-end transform-none">
          <Link to='/contact' className="btn btn-outline rounded-full border-2 transform-none">Contact Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;