import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import { scrollToSection } from './scrollUtils'


const Hero = () => {
  return (
    <section
    id='home'
    className='max-w-[1140px] mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
        
        <motion.h3 initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.6, duration: 0.3}} className='text-lg font-titleFont tracking-wide text-textBlue'>
            Hi 👋 My name is
        </motion.h3>
        <motion.h1 initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.6, duration: 0.4}} 
        className='text-5xl mdl:text-6xl lgl:text-7xl font-titleFont font-semibold flex flex-col'
        
        >
            Millie Kembe. 
            <span className='text-textDark mt-2 lgl:mt-4'> I'm a <span>
            <TypeAnimation
      sequence={[
        'Developer.', // Types 'One'
        2000, // Waits 1s
        'Designer.', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Student.', 
        2000, // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: 'text-7xl', display: '' }}
    />
                </span>
            </span>
        </motion.h1>
        <motion.p initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.6, duration: 0.5}} 
        className='text-base md:max-w-[650px] text-textDark font-medium'>

            I am an aspiring Software Engineer with a strong background in visual design and experience in frontend development. My career interests include full-stack development, machine learning, and artificial intelligence. <br />
            <a to="about" onClick={() => scrollToSection('about')}> 
                <span className='text-textBlue inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>Learn More
                <span className='absolute w-full h-[1px] bg-textBlue left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'>
                </span>
                </span>

            
            </a>  
        </motion.p>
        <a href='https://github.com/mkembe' target='_blank' className='w-52 h-14 text-sm font-titleFont'>
        <motion.button 
        initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.6, duration: 0.6}} 
        className='w-52 h-14 text-sm font-titleFont border border-textBlue rounded-md text-textBlue tracking-wide hover:bg-textDark duration-300'>
            <a> Check out my Projects! </a>
        </motion.button>
        </a>

    </section>
  )
}

export default Hero