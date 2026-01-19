import React, { use, useRef } from 'react'
import pfp from '../assets/pfp.jpg'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi';
import LoadingBar from 'react-top-loading-bar';
import { useSelector } from 'react-redux';

const Hero = () => {

    const loadingRef = useRef(null);
    const theme = useSelector((state) => state.theme.value)

    const handleLoad = () => {
        loadingRef.current.continuousStart()

        setTimeout(() => {
            loadingRef.current.complete()
        }, 800);
    }

    return (
        <div className='flex w-screen h-[calc(100vh-180px)] md:h-[calc(100vh-180px)] justify-center items-center'>
            <LoadingBar color={`${theme ? '#ffffff' : '#101010'}`} ref={loadingRef} />
            <div className='flex lg:flex-row flex-col items-center justify-center gap-5'>
                <img className='rounded-full max-w-60 md:max-w-70 lg:max-w-100' src={pfp} alt="profilePic" />
                <div>
                    <h1 className='text-center text-[clamp(1.8rem,3vw,2.8rem)] font-bold'>I'm Abdullah</h1>

                    <p className='text-center text-[clamp(0.7rem,2.5vw,1.1rem)] w-80 leading-tight'>A <i className=' underline'>Full Stack Web Developer</i> and <br /> an <i className='font-medium'>Enthusiatic Programmer</i></p>

                    <div className='flex gap-2 mt-2 md:mt-3 justify-center items-center'>
                        <button className='px-4 py-2 text-[clamp(0.8rem,2vw,1rem)] font-semibold border-2 m-1 rounded-3xl w-max flex items-center gap-3 '>
                            <a href="/public/faviconCat.png"  onClick={() => handleLoad()} download={"faviconCat.png"}>Download Resume</a>
                            <HiDownload className='text-[clamp(1.1rem,3vw,1.2rem)]' />
                        </button>
                        <ul className='flex gap-2 text-[clamp(1.4rem,3vw,1.5rem)]'>
                            <a href="https://www.linkedin.com/in/hrefabdullah/"><FaLinkedinIn /></a>
                            <a href="https://github.com/hrefabdullah"><FaGithub /></a>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero