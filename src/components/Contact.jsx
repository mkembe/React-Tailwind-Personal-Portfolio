import React from 'react'

const Contact = () => {
  return (
    <section
    id="contact"
    className='max-w-[1140px] mx-auto py-10 xl:py-32 flex flex-col gap-3 items-center justify-center'>
        <p className='font-titleFont text-lg text-textBlue font-semibold flex items-center tracking-wide '> 04. What's Next? </p>
        <h2 className='font-titleFont text-5xl font-semibold'> Get In Touch 📥 </h2>
        <p className='max-w-[600px] text-center text-textDark'> I'm currently looking for any new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll make sure to get back to you! </p>
        <a href='mailto:mikembe@unc.edu'>
            <button className='w-40 h-14 border border-textBlue mt-6 font-titleFont text-sm text-textBlue tracking-wider rounded-md hover:bg-textDark duration-300'>Contact Me</button>
        </a>
    </section>
  )
}

export default Contact