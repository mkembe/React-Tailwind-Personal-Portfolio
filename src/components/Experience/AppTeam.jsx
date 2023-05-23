import React from 'react'
import { motion } from 'framer-motion'
import { TbCircleArrowRight, TbFileArrowRight } from 'react-icons/tb'

const AppTeam = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1}} className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'> iOS Developement Apprentice <span className='text-textBlue tracking-wide'>@AppTeamCarolina</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'> Jan 2023 - Present </p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textBlue mt-1'>
                    <TbCircleArrowRight />
                </span>
                Participated in App Team Carolina’s Academy program, developing expertise in Swift UI and iOS app development through hands-on learning and practical application 
            </li>
            <li className='text-base flex gap-2 text-textDark'>
              <span className='text-textBlue mt-1'>
                    <TbCircleArrowRight />
              </span>
              Built projects and collaborated with fellow team members to create high-quality iOS apps, gaining experience in project management, teamwork, and problem-solving            
            </li>
        </ul>
        

    </motion.div>
  )
}

export default AppTeam