import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { CgFileDocument } from 'react-icons/cg';
import { FaMoon } from 'react-icons/fa';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { IoMdSunny } from 'react-icons/io';
import { LuCodeXml } from 'react-icons/lu';
import { MdOutlineArticle } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../features/theme/themeSlice';


const Navbar = () => {

  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu);
  }

  const handleTheme = () => {
    setDark(!dark)
    dispatch(changeTheme())
  }

  return (
    <div className={`${theme ? "bg-black text-white" : "bg-white text-black"} flex relative px-9 md:px-15 py-7 md:py-[clamp(1rem,2vw,1.5rem)] justify-between items-center`}>
      <h1 className='text-[clamp(1.45rem,3vw,1.75rem)] font-medium'>hrefAbdullah</h1>

      {/* Desktop Menu */}
      <ul className='gap-2 hidden sm:flex sm:gap-3 md:gap-6 lg:gap-8 text-[clamp(0.9rem,2vw,1.1rem)] '>
        <li className='cursor-pointer flex gap-2 w-full justify-center items-center'>
           <HiOutlineDesktopComputer />
          <h1>Projects</h1>
        </li>
        <li className='cursor-pointer flex gap-2 w-full justify-center items-center'>
          <MdOutlineArticle />
          <h1>Blogs</h1>
        </li>
        <li className='cursor-pointer flex gap-2 w-[170%] justify-center items-center'>
          <LuCodeXml />
          <h1>Tech Stack</h1>
        </li>
        <li className='cursor-pointer flex gap-2 w-full justify-center items-center'>
          <CgFileDocument />
          <h1>Resume</h1>
        </li>
        <button className='hidden sm:flex text-[clamp(1.25rem,3vw,0.75rem)] rotate-340' onClick={() => handleTheme()}>{dark ? <FaMoon /> : <IoMdSunny />}</button>
      </ul>

      {/* Mobile Icons */}
      <div className='flex gap-3 sm:hidden'>
        <button className='text-[clamp(1.25rem,3vw,0.75rem)] rotate-340' onClick={() => handleTheme()}>{dark ? <FaMoon /> : <IoMdSunny />}</button>
        <button className='text-[clamp(1.7rem,3vw,0.75rem)] sm:hidden' onClick={() => toggleMenu()}>{menu ? <RxCross2 /> : <BiMenu />}</button>
      </div>

      {/* Mobile Menu */}
      {menu ? <ul className={`${theme ? "bg-black border-white text-white" : "bg-white border-black text-black"} flex flex-col w-32.5 h-max gap-4 text-center border-2 py-4 absolute top-19 right-6 rounded-lg`}>
        <li className='cursor-pointer flex gap-2 w-full justify-center items-center'>
           <HiOutlineDesktopComputer />
          <h1>Projects</h1>
        </li>
        <li className='cursor-pointer flex gap-2 w-full justify-center items-center'>
          <MdOutlineArticle />
          <h1>Blogs</h1>
        </li>
        <li className='cursor-pointer flex gap-2 w-full justify-center items-center'>
          <LuCodeXml />
          <h1>Tech Stack</h1>
        </li>
        <li className='cursor-pointer flex gap-2 w-full justify-center items-center'>
          <CgFileDocument />
          <h1>Resume</h1>
        </li>
      </ul> : null}
    </div>
  )
}

export default Navbar