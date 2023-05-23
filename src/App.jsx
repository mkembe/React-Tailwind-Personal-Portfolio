import React from "react"
import { Navbar, Left, Right, Hero, About, Experience, Projects, Archive, Contact, Footer } from './components' 
import { motion } from 'framer-motion'
import { useRef } from 'react'


function App() {
  

  return (
    <>
    <div className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
      <div className="sticky top-0 z-50 "> <Navbar /> </div>

      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <motion.div initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1.2}} className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <Left/>
        </motion.div>
        <div className="h-[88vh] w-full mx-auto p-4"> 
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Archive />
          <Contact  />
          <Footer />


        </div>
        <motion.div initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1.2}} className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
          <Right/>
        </motion.div>

      </div>

    </div>

    </>
  )
}

export default App
