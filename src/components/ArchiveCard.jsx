import React from 'react'
import { DiGithub } from 'react-icons/di'
import { FaRegFolder } from 'react-icons/fa'
import { TbBrandGithub } from 'react-icons/tb'

const ArchiveCard = ({title, description, listItem, link}) => {
  return (
    <a href={link} target='_blank'>
        <div className='w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
        <div className='flex justify-between items-center'>
            <FaRegFolder className='text-4xl text-textBlue' />
            <TbBrandGithub className='text-4xl hover:text-textBlue' /> 
        </div>
        <div>
            <h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textBlue'> {title} </h2>
            <p className='text-sm mt-3'> {description} </p>
        </div>
        <div>
            <ul className='text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-center flex-wrap '>
                {
                    listItem.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))
                }
            </ul>
        </div>


    </div>
    </a>

  )
}

export default ArchiveCard