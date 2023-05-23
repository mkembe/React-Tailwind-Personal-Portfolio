import React from 'react'
import SectionTitle from './SectionTitle'
import { FaJava, FaPython } from 'react-icons/fa'
import { SiJavascript, SiSwift } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { DiCss3, DiHtml5 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { DiSwift } from 'react-icons/di'
import { FaUnity } from 'react-icons/fa'
import { DiCode } from 'react-icons/di'
import profile from '../assets/images/profile.jpg'





const About = () => {
  return (
    <section id="about" className='max-w-[1024px] mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
        <SectionTitle title="About Me" titleNumber="01"/>     
        <div className='flex flex-col lg:flex-row gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                <p>
                    Hi 👋 My name is Millie Kembe from Raleigh, North Carolina and I'm a second-year Computer Science student at the 
                    <span className='text-textBlue'> University of North Carolina at Chapel Hill </span>. 
                    My interest in programming started back in middle school when I decided I wanted to try building my own videogames using C# and Unity. 
                    Struggling through this pursuit taught me a lot about programming and design which really sparked my curiosity. I became interested in learning more about other 
                    areas such as Web Development, 3D Modeling, Visual Design, Mobile App Development, and Machine Learning. 
                </p>
                <p>
                    Fast forward to today, and I've had the privilege of working on numerous professional Graphic and Web Design projects as a Freelance Visual Designer, immersing in app development and
                    building iOS applications as part of <span className='text-textBlue'> App Team Carolina </span>, and continuing to explore the world of Computer Science through some personal projects. 

                I've also had the privilege of serving on the Executive Board of <span className='text-textBlue'>Black in Tech</span> where I've been able to 
                work towards the development of intensive programs for increasing Black and other ethnic participation in the field of technology and Computer Science.
                </p>

                <p> When I'm not at the computer, I'm usually producing music, playing basketball, or hanging out with friends.</p>

                <p> Here's a few technologies I have worked with in the past:</p>
                <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6">
                    <li className='flex items-center gap-2'> <span className='text-textBlue'> <FaJava/> </span> Java </li>
                    <li className='flex items-center gap-2'> <span className='text-textBlue'> <FaPython/> </span> Python </li>
                    <li className='flex items-center gap-2'> <span className='text-textBlue'> <SiJavascript/> </span> JavaScript </li>
                    <li className='flex items-center gap-2'> <span className='text-textBlue'> <DiCss3/> </span> CSS </li>
                    <li className='flex items-center gap-2'> <span className='text-textBlue'> <DiHtml5/> </span> HTML </li>
                    <li className='flex items-center gap-2'> <span className='text-textBlue'> <SiTailwindcss/> </span> Tailwind CSS </li>
                    <li className='flex items-center gap-2'> <span className='text-textBlue'> <FaReact/> </span> ReactJS </li>
                    <li className='flex items-center gap-2'> <span className='text-textBlue'> <DiSwift/> </span> Swift </li>
                    <li className='flex items-center gap-2'> <span className='text-textBlue'> <FaUnity/> </span> Unity </li>
                    <li className='flex items-center gap-2'> <span className='text-textBlue'> <DiCode/> </span> C </li>
                    <li className='flex items-center gap-2'> <span className='text-textBlue'> <DiCode/> </span> C# </li>
                    <li className='flex items-center gap-2'> <span className='text-textBlue'> <DiCode/> </span> C++ </li>











                </ul>

            </div>
            <div className='w-full lgl:w-1/3 h-80 relative group'>
                <div className=' w-full h-80 -left-6 -top-6 rounded-lg'>
                    <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0 -left-6'>
                        <img className="rounded-lg h-full object-cover" src={profile} alt='profile'/>
                        <div className='hidden lgl:inline-block absolute w-full h-80 bg-textBlue/10 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
                    </div>
                    <div className='hidden lgl:inline-flex w-full h-80 -mt-72 border-2 border-textBlue rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'></div>
                </div>
            </div>
        
        
        
        </div> 




    </section>
  )
}

export default About