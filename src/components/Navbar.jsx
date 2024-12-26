import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFigma } from 'react-icons/fa'
// import { FaSquareXTwitter } from 'react-icons/fa'

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="w-10 mx-2" src={logo} alt="logo" />
    </div>
    <div className='flex items-center justify-center gap-4 text-2xl m-8 text-lime-500'>
        <a href="https://www.linkedin.com/in/vanshika-wadhwa-4877832a2/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="http://github.com/vanshika-wadhwa" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/1shikawadhwa/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <FaFigma />
        {/* <FaSquareXTwitter /> */}
        
    </div>
  </nav>
}

export default Navbar
