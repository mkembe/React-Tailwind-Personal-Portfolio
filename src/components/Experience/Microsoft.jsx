import React from 'react'
import { motion } from 'framer-motion'
import { TbCircleArrowRight, TbFileArrowRight } from 'react-icons/tb'

const Microsoft = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1}} className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'> Software Engineering Intern <span className='text-textBlue tracking-wide'>@Microsoft</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'> May 2024 - Aug 2024 </p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textBlue mt-1'>
                    <TbCircleArrowRight />
                </span>
                Migrated the storage backing of CRS, a service that processes billing and deferral data for Microsoft’s subscription-based transactions, from costly and temperamental SQL Managed Instances to Azure Blob Storage, resulting in $3 million in annual savings.
            </li>
            <li className='text-base flex gap-2 text-textDark'>
              <span className='text-textBlue mt-1'>
                    <TbCircleArrowRight />
              </span>
              Refactored CRS processor code to enable seamless read and write capabilities to Azure Blob Storage using C# and .NET.
            </li>
            <li className='text-base flex gap-2 text-textDark'>
              <span className='text-textBlue mt-1'>
                    <TbCircleArrowRight />
              </span>
              Engineered an Azure Functions-based solution for the migration of data to Blob Storage, ensuring a smooth transition during planned downtime.            </li>
        </ul>
        

    </motion.div>
  )
}

export default Microsoft