import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {BiLinkExternal} from "react-icons/bi";
import {FaGithub} from "react-icons/fa";

const ProjectItem = ({title, description, tech, bgImg, demoURL, codeURL}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <Image className="rounded-xl group-hover:opacity-10" src={bgImg} alt='/' width={1300} height={900} />
        <div className='hidden group-hover:block w-[80%] h-auto absolute top-[5%] left-[50%] translate-x-[-50%] translate-y-[5%] lg:top-[25%]'>
            <h3 className='text-md md:text-lg lg:text-xl text-white tracking-wider text-center'>{title}</h3>
            <p className='text-sm md:text-md lg:text-md pb-4 pt-2 text-white text-justify'>{description}</p>
            <p className='text-sm md:text-md lg:text-md pb-4 py-1 text-white font-bold text-center'>{tech}</p>
            <div className='flex items-center justify-around pt-1'>
                <Link href={demoURL}>
                  <div className='flex items-center justify-between text-center p-1 gap-1 rounded-lg bg-white text-gray-700 font-bold text-sm cursor-default hover:scale-105 ease-in duration-300'>
                    <BiLinkExternal />
                    <p className='text-sm md:text-md lg:text-md'>Live Demo</p>
                  </div>
                </Link>
                <Link href={codeURL}>
                  <div className='flex items-center justify-between text-center p-1 gap-1 rounded-lg bg-white text-gray-700 font-bold text-sm cursor-default hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                    <p className='text-sm md:text-md lg:text-md'>Code Repo</p>
                  </div>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default ProjectItem