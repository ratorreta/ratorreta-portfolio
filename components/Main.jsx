import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Main = () => {
  return (
    <div id="main" className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let's Build Something Together</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Rose Anne</span></h1>
                <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>A self-taught web developer with a decade worth of experience in a fast-paced utility company, eager to utilize
proven skills in HTML, CSS, JavaScript and React. <br/><br/>Join me down below and see my portfolio.</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-default hover:scale-110 ease-in duration-300">
                        <a href='https://www.linkedin.com/in/ratorreta/' target='_blank'><FaLinkedin/></a>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-default hover:scale-110 ease-in duration-300">
                        <a href='https://github.com/ratorreta' target='_blank'><FaGithub/></a>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-default hover:scale-110 ease-in duration-300">
                        <a href='mailto:ratorreta@gmail.com?cc=roseanne.torreta@outlook.com' target='_blank'><AiOutlineMail/></a>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-default hover:scale-110 ease-in duration-300">
                        <a href="https://drive.google.com/file/d/1aaBNgLzklJrhNKhlJpNARG4-L3LSbHJ3/view?usp=share_link" target="_blank"><BsFillPersonLinesFill/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main