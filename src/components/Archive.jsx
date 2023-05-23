import React from 'react'
import ArchiveCard from './ArchiveCard'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Archive = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    <div className='max-w-[1140px] mx-auto px-4 py-24'>
        <div className='w-full flex flex-col items-center'>
            <h2 className='text-3xl font-titleFont font-semibold'>
                Other Noteworthy Projects
            </h2>
            <p className='text-sm font-titleFont text-textBlue'> view the archive 📁 </p>
 



        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
            <ArchiveCard title="Pokey" description="Pokey is an interactive iOS app that uses API calls to display every Pokemon character and tracks their evolutions." listItem={["Swift", "Xcode", "SF Symbols"]} link="https://github.com/mkembe/s23-academy-pokey-mkembe"/>
            <ArchiveCard title="Moonshot" description="Moonshot is an interactive iOS app that uses API calls to display information about astronauts on each of the Apollo missions." listItem={["Swift", "Xcode", "SF Symbols"]} link="https://github.com/mkembe/s23-academy-moonshot-mkembe"/>
            <ArchiveCard title="Liftey" description="Liftey is an iOS app that allows users to create workouts and keep of track sets, reps, and weights for each workout." listItem={["Swift", "Xcode", "SF Symbols"]} link="https://github.com/mkembe/s23-academy-liftey-mkembe"/>
            <ArchiveCard title="WeSplit" description="WeSplit is an iOS app that calculates a bill for each person when a bill is split amongst multiple people. The calculation factors in tip percentages and the number of people paying a bill." listItem={["Swift", "Xcode", "SF Symbols"]} link="https://github.com/mkembe/s23-academy-wesplit-mkembe"/>
            <ArchiveCard title="Emojiey" description="Emojiey is an iOS app that allows you to browse the library of Apple emojis and search for emojis by name." listItem={["Swift", "Xcode", "SF Symbols"]} link="https://github.com/mkembe/s23-academy-emojiey-mkembe"/>
            <ArchiveCard title="Weathery" description="Weathery is an app for iOS that allows you to check the current weather of any city." listItem={["Swift", "Xcode", "SF Symbols"]} link="https://github.com/mkembe/s23-academy-weathery-mkembe"/>
            {
                showMore && (
                    <>
                        <motion.div
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        >
                            <ArchiveCard title="ToDoey" description="A To-Do list app that allows you to create multiple To Do Lists with editable tasks." listItem={["Swift", "Xcode", "SF Symbols"]} link="https://github.com/mkembe/s23-academy-todoey-mkembe"/>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        >
                            <ArchiveCard title="Unit Converter" description="Unit Converter is an iOS app that converts one of five volume measurements to another measurement after receiving user input." listItem={["Swift", "Xcode", "SF Symbols"]} link="https://github.com/mkembe/s23-academy-unit-converter-mkembe"/>
                        </motion.div>







                    </>
                )
            }

        </div>
        <div className='mt-12 flex items-center justify-center'>
            {
                showMore
                ?             
                <button onClick={() => setShowMore(false)} className='w-36 h-12 rounded-md text-textBlue text-[13px] border border-textBlue hover:bg-textDark duration-300'>Show Less</button> 
                :             
                <button onClick={() => setShowMore(true)} className='w-36 h-12 rounded-md text-textBlue text-[13px] border border-textBlue hover:bg-textDark duration-300'>Show More</button>
            }
        </div>




    </div>
  )
}

export default Archive