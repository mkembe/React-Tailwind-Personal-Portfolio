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
                Designed and delivered high-quality visual designs such as logos, graphics, websites, and marketing materials for clients across a variety of industries and sectors
            </li>

            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textBlue mt-1'>
                    <TbCircleArrowRight />
                </span>
                Maintained strong relationships with clients and provided ongoing design support and consultation            
            </li>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textBlue mt-1'>
                    <TbCircleArrowRight />
                </span>
                Managed multiple design projects simultaneously, averaging 5+ per quarter            </li>
        </ul>
        

    </motion.div>
  )
}

export default VisualDesign