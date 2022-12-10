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
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-auto">
              <li className='mb-2'><NavLink to='/'><HiHome className='text-xl' /></NavLink></li>
              <li className='mb-2'><NavLink to='/about'><TiUser className='text-xl' /></NavLink></li>
              <li><NavLink to='/projects'><HiFolder className='text-xl' /></NavLink></li>
            </ul>
          </div>
          <div className='hidden lg:flex'>
            <ul className="menu menu-horizontal px-1">
              <li className='mr-3'><NavLink to='/'><HiHome className='text-2xl' /></NavLink></li>
              <li className='mr-3'><NavLink to='/about'><TiUser className='text-2xl' /></NavLink></li>
              <li><NavLink to='/projects'><HiFolder className='text-2xl' /></NavLink></li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <Link className="btn">Get started</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;