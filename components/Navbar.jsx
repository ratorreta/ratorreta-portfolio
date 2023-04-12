import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai";
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";



function Navbar() {

    const [nav,setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    function handleNav() {
        setNav(!nav);
    }

    useEffect(()=>{
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true);
            } else  {
                setShadow(false);
            }
        }
        window.addEventListener('scroll', handleShadow)
    },[])


    return (
        <div className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]" }>  
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <Image src="/assets/RTLogo.png" alt="/" width="75" height="30" />
                </Link>
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b-2">Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className="ml-10 text-sm uppercase hover:border-b-2">About</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-10 text-sm uppercase hover:border-b-2">Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="ml-10 text-sm uppercase hover:border-b-2">Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className="ml-10 text-sm uppercase hover:border-b-2">Contact</li>
                        </Link>
                        <Link href="https://drive.google.com/file/d/18RtDJkRClthYjCNvSyYHS4VKOJeKkD7A/view?usp=share_link" target="_blank">
                            <li className="ml-10 text-sm uppercase hover:scale-105 ease-in duration-300 p-1 bg-violet-300 rounded-md">Resume</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
                <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image src="/assets/RTLogo.png" alt="/" width="60" height="30" />
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">Let's build something together.</p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li className="py-4 text-sm">Home</li>
                            </Link>
                            <Link href="/#about">
                                <li className="py-4 text-sm">About</li>
                            </Link>
                            <Link href="/#skills">
                                <li className="py-4 text-sm">Skills</li>
                            </Link>
                            <Link href="/#projects">
                                <li className="py-4 text-sm">Projects</li>
                            </Link>
                            <Link href="/#contact">
                                <li className="py-4 text-sm">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">Let's Connect</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-default hover:scale-105 ease-in duration-300">
                                    <a href='https://www.linkedin.com/in/ratorreta/' target='_blank'><FaLinkedin/></a>
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-default hover:scale-105 ease-in duration-300">
                                    <a href='https://github.com/ratorreta' target='_blank'><FaGithub/></a>
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-default hover:scale-105 ease-in duration-300">
                                    <a href='mailto:ratorreta@gmail.com?cc=roseanne.torreta@outlook.com' target='_blank'><AiOutlineMail/></a>
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-default hover:scale-105 ease-in duration-300">
                                    <a href="https://drive.google.com/file/d/18RtDJkRClthYjCNvSyYHS4VKOJeKkD7A/view?usp=share_link" target="_blank"><BsFillPersonLinesFill/></a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Navbar;



// Notes:
// > z-[100] always on top
// > Tailwind is mobile first, that's why you need to set the mobile styles,
//          and after the medium and big screen sizes (see <ul>)
// >