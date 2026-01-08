import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { CgFileDocument } from 'react-icons/cg';
import { FaCode, FaMoon } from 'react-icons/fa';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { IoMdSunny } from 'react-icons/io';
import { LuCodeXml } from 'react-icons/lu';
import { MdOutlineArticle } from 'react-icons/md';
import { RiBuilding2Line } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {

  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <div className='flex relative px-8 md:px-15 py-[clamp(1rem,2vw,1.5rem)] justify-between items-center'>
      <h1 className='text-[clamp(1.45rem,3vw,1.75rem)] font-medium'>hrefAbdullah</h1>
      <ul className='gap-2 hidden sm:flex sm:gap-3 lg:gap-8 text-[clamp(0.75rem,2vw,1rem)] '>
        <li className='hover:text-black text-gray-900 cursor-pointer flex gap-2 w-[100%] justify-center items-center'>
           <HiOutlineDesktopComputer />
          <h1>Projects</h1>
        </li>
        <li className='hover:text-black text-gray-900 cursor-pointer flex gap-2 w-[100%] justify-center items-center'>
          <MdOutlineArticle />
          <h1>Blogs</h1>
        </li>
        <li className='hover:text-black text-gray-900 cursor-pointer flex gap-2 w-[170%] justify-center items-center'>
          <LuCodeXml />
          <h1>Tech Stack</h1>
        </li>
        <li className='hover:text-black text-gray-900 cursor-pointer flex gap-2 w-[100%] justify-center items-center'>
          <CgFileDocument />
          <h1>Resume</h1>
        </li>
        <button className='hidden sm:flex text-[clamp(1.25rem,3vw,0.75rem)] rotate-340' onClick={() => setDark(!dark)}>{dark ? <FaMoon /> : <IoMdSunny />}</button>
      </ul>
      <div className='flex gap-3 sm:hidden'>
        <button className='text-[clamp(1.25rem,3vw,0.75rem)] rotate-340' onClick={() => setDark(!dark)}>{dark ? <FaMoon /> : <IoMdSunny />}</button>
        <button className='text-[clamp(1.7rem,3vw,0.75rem)] sm:hidden' onClick={() => toggleMenu()}>{menu ? <RxCross2 /> : <BiMenu />}</button>
      </div>
      {menu ? <ul className='flex flex-col w-[130px] h-max gap-4 text-center border-black border-2 py-4 absolute top-16 right-4 rounded-lg'>
        <li className='hover:text-black text-gray-600 cursor-pointer flex gap-2 w-[100%] justify-center items-center'>
           <HiOutlineDesktopComputer />
          <h1>Projects</h1>
        </li>
        <li className='hover:text-black text-gray-600 cursor-pointer flex gap-2 w-[100%] justify-center items-center'>
          <MdOutlineArticle />
          <h1>Blogs</h1>
        </li>
        <li className='hover:text-black text-gray-600 cursor-pointer flex gap-2 w-[100%] justify-center items-center'>
          <LuCodeXml />
          <h1>Tech Stack</h1>
        </li>
        <li className='hover:text-black text-gray-600 cursor-pointer flex gap-2 w-[100%] justify-center items-center'>
          <CgFileDocument />
          <h1>Resume</h1>
        </li>
      </ul> : null}
    </div>
  )
}

export default Navbar