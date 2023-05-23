import React from 'react'
import { TbBrandGithub } from "react-icons/tb"
import { SlSocialLinkedin } from "react-icons/sl"



const Left = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
        <div className='flex flex-col gap-4'>
            <a href="https://github.com/mkembe" target="_blank" className='flex flex-col items-center gap-4'>
                <span className='w-10 h-10 text-xl bg-textDark rounded-full inline-flex items-center justify-center hover:bg-textBlue cursor-pointer hover:-translate-y-2 transition-all duration-300'> 
                    <TbBrandGithub/> 
                </span>
            </a>
            <a href="https://www.linkedin.com/in/millie-kembe-5b828b248/" target="_blank" className='flex flex-col items-center gap-4'>
                <span className='w-10 h-10 text-xl bg-textDark rounded-full inline-flex items-center justify-center hover:bg-textBlue cursor-pointer hover:-translate-y-2 transition-all duration-300'> 
                    <SlSocialLinkedin/> 
                </span>
            </a>
        </div>
        <div className='w-[2px] h-32 bg-textDark '> </div>
        
    </div>
  )
}

export default Left