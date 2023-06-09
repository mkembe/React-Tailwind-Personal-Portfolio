import React from 'react'
import { motion } from 'framer-motion'
import { TbCircleArrowRight, TbFileArrowRight } from 'react-icons/tb'

const VisualDesign = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1}} className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'> Designer <span className='text-textBlue tracking-wide'>@FreelanceVisualDesign</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'> Jun 2017 - Present </p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textBlue mt-1'>
                    <TbCircleArrowRight />
                </span>
                Conceptualized and crafted unique branding identities for 20+ clients, resulting in an average increase of 30% in brand recognition and customer engagement.
            </li>

            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textBlue mt-1'>
                    <TbCircleArrowRight />
                </span>
                Streamlined project management processes by introducing agile methodologies, reducing project completion time by 15% and increasing productivity by 20%.
          </li>
        </ul>
        

    </motion.div>
  )
}

export default VisualDesign