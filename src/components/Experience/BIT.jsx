import React from 'react'
import { motion } from 'framer-motion'
import { TbCircleArrowRight, TbFileArrowRight } from 'react-icons/tb'

const BIT = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1}} className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'> Programming Co-Chair <span className='text-textBlue tracking-wide'>@BlackInTech</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'> May 2023 - Present </p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textBlue mt-1'>
                    <TbCircleArrowRight />
                </span>
                Developed and executed creative social engagement strategies to enhance member participation and involvement during events, resulting in increased attendance and member satisfaction.
            </li>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textBlue mt-1'>
                    <TbCircleArrowRight />
                </span>
                Organized and managed monthly social events/programs, collaborating with executive team members and external faculty, ensuring successful execution and adherence to the club's mission.            
            </li>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textBlue mt-1'>
                    <TbCircleArrowRight />
                </span>
                Coordinated social engagement aspects for monthly General Body Meetings (GBMs), including scheduling events, delegating tasks to team members, and maintaining a comprehensive calendar, fostering a vibrant and inclusive community for Black and other ethnic technology majors at the University of North Carolina at Chapel Hill.            
                </li>

        </ul>
        

    </motion.div>
  )
}

export default BIT