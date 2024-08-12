import React from 'react'
import { motion } from 'framer-motion'
import { TbCircleArrowRight, TbFileArrowRight } from 'react-icons/tb'

const AppTeam = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1}} className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'> iOS Developer <span className='text-textBlue tracking-wide'>@AppTeamCarolina</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'> Jan 2023 - Present </p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textBlue mt-1'>
                    <TbCircleArrowRight />
                </span>
                Facilitated maintenance and development of new features for Bubbly, an iPad game consisting of targeted brain training exercises to help improve vision in children and adolescents with Cortical Visual Impairment (CVI).
 
            </li>
            <li className='text-base flex gap-2 text-textDark'>
              <span className='text-textBlue mt-1'>
                    <TbCircleArrowRight />
              </span>
              Architected principle features for a mobile app to streamline inventory management and distribution for a $14,000+ university-funded food pantry serving students facing food insecurity.
            </li>
        </ul>
        

    </motion.div>
  )
}

export default AppTeam