import React from 'react'
import { TbBrandGithub } from "react-icons/tb"
import { SlSocialLinkedin } from "react-icons/sl"

const Footer = () => {
  return (
    <div className='hidden xs:inline-flex xl:hidden items-center justify-center w-full py-6 gap-5'>
        <a href="https://github.com/mkembe" target="_blank" className='flex flex-col items-center gap-4'>
                <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 rounded-full inline-flex items-center justify-center hover:border-textBlue hover:text-textBlue cursor-pointer hover:-translate-y-2 transition-all duration-300'> 
                    <TbBrandGithub/> 
                </span>
            </a>
            <a href="https://www.linkedin.com/in/millie-kembe-5b828b248/" target="_blank" className='flex flex-col items-center gap-4'>
                <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 rounded-full inline-flex items-center justify-center hover:border-textBlue hover:text-textBlue cursor-pointer hover:-translate-y-2 transition-all duration-300'> 
                    <SlSocialLinkedin/> 
                </span>
            </a>


    </div>
  )
}

export default Footer