import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';


const Contact = () => {

  return (
    <div id="contact" className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>

                {/* left */}

                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className="rounded-xl hover:scale-105 ease-in duration-300" src="/../public/assets/contact.jpg" alt="/" width="640" height="247" />
                        </div>
                        <div>
                            <h2 className='py-2 uppercase'>Rose Anne Torreta</h2>
                            <p>Front-End Web Developer </p>
                            <p className='py-4'>I am available for full-time positions. Feel free to contact me. </p>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>Connect With Me</p>
                            <div className='flex items-center justify-between py-4'>
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

                {/* right */}

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form method='post' action='https://getform.io/f/d8d7fa9c-d2ad-4bb7-9b88-fe2543007212'>
                            <div className='my-2'>
                                <input type="reset" value="Reset Form" className='w-100 p-1 hover:scale-105 ease-in duration-100 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="text" name='name' required />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="email" name='email' required />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="text" name='subject' required />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows="10" type="text" name='message' required />
                            </div>
                            <div>
                                <button type="submit" className='w-full p-4 mt-4 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href="">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-default hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='m-auto text-[#5651e5]' size={30} />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact;