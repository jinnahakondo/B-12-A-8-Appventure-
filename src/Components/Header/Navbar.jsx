import React from 'react';
import Logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className=' bg-base-100 shadow-sm '>
            <div className="navbar mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  p-2 shadow space-y-5 ">
                            <NavLink to='/' >Home</NavLink>
                            <NavLink to='/apps'>Apps</NavLink>
                            <NavLink to='/installation'>Installation</NavLink>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl"><img src={Logo} className='h-10 w-10 hidden md:block' /><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>AppVenture</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-8 font-semibold">
                        <NavLink to='/' >Home</NavLink>
                        <NavLink to='/apps'>Apps</NavLink>
                        <NavLink to='/installation'>Installation</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://github.com/jinnahakondo' className="btn max-md:text-xs text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-xl"><FaGithub /> <span>Contribute</span></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;