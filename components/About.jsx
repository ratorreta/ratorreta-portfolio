import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full md-h:screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600 text-justify'>
                  Hello there! I'm Rose Anne, a chemist who has a passion for lifelong learning and exploring new frontiers. 
                  I recently decided to shift my focus to the world of web development, and I'm thrilled to be on this new path.
                  <br/><br/> My fascination with web design started back in the day of Friendster and Blogspot, where I discovered how to personalize profiles using CSS templates. 
                  Later on, my interest in programming grew as I began using Microsoft Excel, starting with simple IF statements and eventually creating forms with VBA. 
                  My desire to create solutions to problems fueled my eagerness to learn these skills, and I find problem-solving to be an incredibly engaging challenge. 
                  The satisfaction of seeing a solution come to life is one of the best feelings in the world.
                  <br/><br/>I am confident that my strong foundation in problem-solving, critical thinking, and attention to detail will serve me well in the world of web development. 
                  I look forward to continuing to learn and explore this exciting field.
                  <br/><br/>In my free time, I engage in a variety of activities that bring me joy and fulfillment. 
                  I enjoy yoga, strumming the guitar, singing, reading, baking, and spending time with my dog Hobbes and loved ones.
                </p>
                <Link href="#projects">
                  <p className='mt-2 py-2 text-gray-600 underline cursor-pointer'>Check out my projects.</p>
                </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className="rounded-xl" src="/assets/RBT.png" alt="/" width="500" height="300" />
            </div>
        </div>
    </div>
  )
}

export default About