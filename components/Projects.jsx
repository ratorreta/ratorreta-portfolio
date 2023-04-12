import React from 'react';
import justYogaImg from "../public/assets/projects/justYogaImg.PNG";
import bookImg from "../public/assets/projects/bookImg.PNG";
import jobifyImg from "../public/assets/projects/jobifyImg.PNG";
import profileImg from "../public/assets/projects/profileImg.PNG"
import ProjectItem from './ProjectItem';


const Projects = () => {
  return (
    <div id="projects" className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          
          <ProjectItem 
            title="Just Yoga" 
            description="Just Yoga is an original project based on my own idea. Searching for yoga videos on YouTube is made easier
because this app utilizes a slider, drop down menu and carousel to
select options. It is designed to be responsive to ensure optimal view
using any device." 
            bgImg={justYogaImg} 
            tech="#React #ContextAPI #youtube-api-search"
            demoURL="https://justyoga.netlify.app" 
            codeURL="https://github.com/ratorreta/justyoga-app" />
          <ProjectItem 
            title="The Book of Answers" 
            description="The Book of Answers is a digital and online version of
the book, 'The Book of Answers' by Carol Bolt. It works like
a Magic 8 ball that is used for seeking advice." 
            bgImg={bookImg} 
            tech="#React #React-Router"
            demoURL="https://thebookofanswers.netlify.app" 
            codeURL="https://github.com/ratorreta/book-of-answers" />
             <ProjectItem 
            title="My Portfolio" 
            description="This is my personal website highlighting my skills and
projects. My first project using Next.js and Tailwind CSS. " 
            bgImg={profileImg}
            tech="#NextJS #TailwindCSS" 
            demoURL="/#projects" 
            codeURL="https://github.com/ratorreta/ratorreta-portfolio" />
          <ProjectItem 
            title="Jobify (soon...)" 
            description="Jobify is a job tracking app that lets users monitor their
job-hunting journey. This project is still a work in progress." 
            bgImg={jobifyImg}
            tech="#React #MongoDB #NodeJS #Express" 
            demoURL="/#projects" 
            codeURL="/#projects" />

        </div>
      </div>
    </div>
  )
}

export default Projects