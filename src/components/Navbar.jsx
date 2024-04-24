import React from 'react'
import myLogo from '../assets/AliShahLogo-removebg-preview.png'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";

const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        <img className="mx-2 h-20 w-20" src={myLogo} alt='logo'/>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin link='https://www.linkedin.com/in/ali-shah-naushad/' />
        <FaGithub link='https://github.com/Alishah-Naushad'/>
        <FaSquareXTwitter />
    </div>
  </nav>
}

export default Navbar
