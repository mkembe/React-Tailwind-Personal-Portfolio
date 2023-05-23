import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/images/logo.png'
import { scrollToSection } from './scrollUtils'
import { useState } from 'react'
import {MdOutlineClose} from 'react-icons/md'
import { TbBrandGithub } from "react-icons/tb"
import { SlSocialLinkedin } from "react-icons/sl"
import resume from '../assets/resume.pdf'

const Navbar = () => {
    const [home, setHome] = useState(false);
    const [about, setAbout] = useState(false);
    const [experience, setExperience] = useState(false);
    const [projects, setProjects] = useState(false);
    const [contact, setContact] = useState(false);

    const handleHome = () => {
        setHome(true);
        setAbout(false);
        setExperience(false);
        setProjects(false);
        setContact(false);
    }

    const handleAbout = () => {
        setHome(false);
        setAbout(true);
        setExperience(false);
        setProjects(false);
        setContact(false);
    }

    const handleExperience = () => {
        setHome(false);
        setAbout(false);
        setExperience(true);
        setProjects(false);
        setContact(false);
    }

    const handleProjects = () => {
        setHome(false);
        setAbout(false);
        setExperience(false);
        setProjects(true);
        setContact(false);
    }

    const handleContact = () => {
        setHome(false);
        setAbout(false);
        setExperience(false);
        setProjects(false);
        setContact(true);
    }

    const handleClickHome = () => {
        scrollToSection('home'); 
        handleHome();
    }
    const handleClickAbout = () => {
        scrollToSection('about'); 
        handleAbout();
    }
    const handleClickExperience = () => {
        scrollToSection('experience'); 
        handleExperience();
    }
    const handleClickProjects = () => {
        scrollToSection('projects'); 
        handleProjects();
    }
    const handleClickContact = () => {
        scrollToSection('contact'); 
        handleContact();
    }

    const [showMenu, setShowMenu] = useState(false); 

    



  return (
    <div className='w-full h-[10vh]  lg:h-[10vh] sticky top-0 z-50 bg-bodyColor px-4 shadow-xl'>
        <div className='max-w h-full mx-auto py- font-titleFont flex items-center justify-between'>
            <motion.div initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.1}}>
                <a href=''> <img src={logo} alt='logo' className='h-16 w-16'/> </a>
            </motion.div>
            
            <div className='hidden mdl:inline-flex items-center gap-7'>
                <ul className='flex text-[13px] gap-7'>
                    <motion.li initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.2}}> 
                    <a to="#home" onClick={handleClickHome}
                    className={`${home
                    ? 'flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link'
                    : 'flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link' }`}> Home</a> </motion.li>

                    <motion.li initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.3}}> 
                    <a to="#about" onClick={handleClickAbout} 
                    className={`${about
                        ? 'flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link'
                        : 'flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link' }`}> <span className='text-textBlue'>01.</span>About </a> </motion.li>

                    <motion.li initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.4}}> 
                    <a to="#experience" onClick={handleClickExperience} 
                    className={`${experience
                        ? 'flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link'
                        : 'flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link' }`}> <span className='text-textBlue'>02.</span>Experience </a> </motion.li>

                    <motion.li initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.5}}> 
                    <a to="#projects" onClick={handleClickProjects} 
                    className={`${projects
                        ? 'flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link'
                        : 'flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link' }`}> <span className='text-textBlue'>03.</span>Projects </a> </motion.li>

                    <motion.li initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.55, duration: 0.2}}> 
                    <a to="#contact" onClick={handleClickContact} 
                    className={`${contact
                        ? 'flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link'
                        : 'flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link' }`}> <span className='text-textBlue'>04.</span> Contact </a> </motion.li>
                </ul>

                <a href={resume} target='_blank'>
                        <motion.button initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.5, duration: 0.2}} className='px-4 py-2 rounded-md text-textBlue text-[13px] border border-textBlue hover:bg-textDark duration-300'>Resume</motion.button>      
                </a>



            </div>
            <div 
            onClick={() => setShowMenu(true)}
            className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textBlue cursor-pointer overflow-hidden group' >
                    <span className='w-full h-[2px] bg-textBlue inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textBlue inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textBlue inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
                </div>
                {
                    showMenu && (
                        <div
                            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end" >
                                <motion.div initial={{x: 20, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.1}}
                                className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative'>
                                    <MdOutlineClose
                                    onClick={() => setShowMenu(false)} 
                                    className='text-3xl text-textBlue cursor-pointer hover:text-red-500 absolute top-4 right-4'/>
                                    <div className='flex flex-col items-center gap-7'>
                                        <ul className='flex flex-col text-base gap-7'>
                                        <motion.li initial={{x: 20, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.1, ease: "easeIn"}}> 
                    <a to="#home" onClick={handleClickHome}
                    className={`${home
                    ? 'flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link'
                    : 'flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link' }`}> Home</a> </motion.li>

                    <motion.li initial={{x: 20, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.2, ease: "easeIn"}}> 
                    <a to="#about" onClick={handleClickAbout} 
                    className={`${about
                        ? 'flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link'
                        : 'flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link' }`}> <span className='text-textBlue'>01.</span>About </a> </motion.li>

                    <motion.li initial={{x: 20, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.3, ease: "easeIn"}}> 
                    <a to="#experience" onClick={handleClickExperience} 
                    className={`${experience
                        ? 'flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link'
                        : 'flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link' }`}> <span className='text-textBlue'>02.</span>Experience </a> </motion.li>

                    <motion.li initial={{x: 20, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.4, ease: "easeIn"}}> 
                    <a to="#projects" onClick={handleClickProjects} 
                    className={`${projects
                        ? 'flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link'
                        : 'flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link' }`}> <span className='text-textBlue'>03.</span>Projects </a> </motion.li>

                    <motion.li initial={{x: 20, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.5, ease: "easeIn"}}> 
                    <a to="#contact" onClick={handleClickContact} 
                    className={`${contact
                        ? 'flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link'
                        : 'flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link' }`}> <span className='text-textBlue'>04.</span> Contact </a> </motion.li>                         
                                        </ul>
                                        <a href={resume} target='_blank'>
                                            <motion.button initial={{x: 20, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 0.5, duration: 0.2}} className='px-4 py-2 rounded-md text-textBlue text-[13px] border border-textBlue hover:bg-textDark duration-300'>Resume</motion.button>      
                                        </a>
                                        <motion.div className='flex flex-row gap-6'>
                                        <motion.a initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.6, duration: 0.2}}  href="https://github.com/mkembe" target="_blank" className='flex flex-col items-center gap-4'>
                <span className='w-10 h-10 text-xl bg-textDark rounded-full inline-flex items-center justify-center hover:bg-textBlue cursor-pointer hover:-translate-y-2 transition-all duration-300'> 
                    <TbBrandGithub/> 
                </span>
            </motion.a>
            <motion.a 
            initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.7, duration: 0.2}}
            href="https://www.linkedin.com/in/millie-kembe-5b828b248/" target="_blank" className='flex flex-col items-center gap-4'>
                <span className='w-10 h-10 text-xl bg-textDark rounded-full inline-flex items-center justify-center hover:bg-textBlue cursor-pointer hover:-translate-y-2 transition-all duration-300'> 
                    <SlSocialLinkedin/> 
                </span>
            </motion.a>
                                        </motion.div>
                                <motion.a 
                                initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0., duration: 0.2}}
                                className='text-sm w-72 tracking-widest text-textBlue text-center mt-4'
                                href="mailto:mikembe@unc.edu">
                                    <p >
                                        mikembe@unc.edu
                                    </p>
                                </motion.a>
 



                                    </div>
                                </motion.div>

                        </div>
                    )
                }
            



        </div>






    </div>
  )
}

export default Navbar