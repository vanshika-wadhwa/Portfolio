import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Navbar() {
    const [nav, setNav] = useState(false);

    return (
      
        <div className='border-b border-blue-800 ml-4'>
        <div className='flex justify-between w-full h-50 p-4 text-[#e9e95c] bg-transparent fixed z-5'>
            <div>
                <h1 className='text-5xl font-signature ml-2'>Vanni</h1>
            </div>

            <ul className='hidden md:flex'>
                <li className='px-2 cursor-pointer font-bold text-[#7de065] hover:scale-105 duration-200'>
                    <Link to='Hero' smooth duration={500}>Home</Link>
                </li>
                <li className='px-2 cursor-pointer font-bold text-[#7de065] hover:scale-105 duration-200'>
                    <Link to='About' smooth duration={500}>About</Link>
                </li>
                <li className='px-2 cursor-pointer font-bold text-[#7de065] hover:scale-105 duration-200'>
                    <Link to='Projects' smooth duration={500}>Projects</Link>
                </li>
                <li className='px-2 cursor-pointer font-bold text-[#7de065] hover:scale-105 duration-200'>
                    <Link to='Technology' smooth duration={500}>Technology</Link>
                </li>
                <li className='px-2 cursor-pointer font-bold text-[#7de065] hover:scale-105 duration-200'>
                    <Link to='Contact' smooth duration={500}>Contact</Link>
                </li>
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-50 text-gray-700 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#FFFFF0] text-black'>
                    <li className='px-2 cursor-pointer font-bold text-[#7de065] py-6 text-4xl'>
                        <Link onClick={() => setNav(!nav)} to='Hero' smooth duration={500}>Home</Link>
                    </li>
                    <li className='px-2 cursor-pointer font-bold text-[#7de065] py-6 text-4xl'>
                        <Link onClick={() => setNav(!nav)} to='About' smooth duration={500}>About</Link>
                    </li>
                    <li className='px-2 cursor-pointer font-bold text-[#7de065] py-6 text-4xl'>
                        <Link onClick={() => setNav(!nav)} to='Projects' smooth duration={500}>Projects</Link>
                    </li>
                    <li className='px-2 cursor-pointer font-bold text-[#7de065] py-6 text-4xl'>
                        <Link onClick={() => setNav(!nav)} to='Technology' smooth duration={500}>Technology</Link>
                    </li>
                    <li className='px-2 cursor-pointer font-bold text-[#7de065] py-6 text-4xl'>
                        <Link onClick={() => setNav(!nav)} to='Contact' smooth duration={500}>Contact</Link>
                    </li>
                </ul>
            )}
        </div>
        </div>
    );
}

export default Navbar;
