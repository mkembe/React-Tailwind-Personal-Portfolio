import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import AppTeam from './Experience/AppTeam';
import { useState } from 'react'
import BIT from './Experience/BIT';
import VisualDesign from './Experience/VisualDesign';

const Experience = () => {
    const [workAppTeam, setWorkAppTeam] = useState(true);
    const [workBIT, setWorkBIT] = useState(false);
    const [workTarg, setWorkTarg] = useState(false);

    const handleAppTeam = () => {
        setWorkAppTeam(true);
        setWorkBIT(false);
        setWorkTarg(false);
    }

    const handleBIT = () => {
        setWorkAppTeam(false);
        setWorkBIT(true);
        setWorkTarg(false);
    }

    const handleTarg = () => {
        setWorkAppTeam(false);
        setWorkBIT(false);
        setWorkTarg(true);
    }




  return (
    <section id="experience" className='max-w-[768px] mx-auto py-10 lgl:py-24 px-4'>
            <h2 className='font-titleFont text-2xl font-semibold flex items-center'>
            <span className='text-base md:text-lg text-textBlue mr-2'>
                02. { " " }
            </span> <span>My <span> 
            <TypeAnimation
      sequence={[
        'Experience', // Types 'One'
        2000,
        'Activities', 
        2000, 
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: 'text-6xl', display: 'inline-block' }}
    />
            </span>
            </span>
            <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6'> 

            </span>
        
    </h2>
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
            <ul className='md:w-32 flex flex-col'>
                <li onClick={handleAppTeam} className={`${workAppTeam ? "border-l-textBlue text-textBlue" : "border-l-textDark text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>App Team Carolina</li>
                <li onClick={handleBIT} className={`${workBIT ? "border-l-textBlue text-textBlue" : "border-l-textDark text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Black in Technology</li>
                <li onClick={handleTarg} className={`${workTarg ? "border-l-textBlue text-textBlue" : "border-l-textDark text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Freelance Visual Design</li>




            </ul>
            {workAppTeam && <AppTeam />}
            {workBIT && <BIT />}
            {workTarg && <VisualDesign />}

        </div>

    
    </section>
  )
}

export default Experience